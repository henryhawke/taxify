import { useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { Connection } from '@solana/web3.js'
import { WalletTaxInfo } from '@/types/tax'
import { generateWalletTaxInfo } from '@/utils/taxCalculator'
import { calculateStateTax } from '@/utils/stateTaxRates'
import dynamic from 'next/dynamic'
import LoadingScreen from '@/components/common/LoadingScreen'
import { useToastMessage } from '@/hooks/useToastMessage'
import { taxifyFunctions } from '@/lib/taxfy/functions'
import { useAuth } from '@/hooks/useAuth'
import { FirebaseError } from 'firebase/app'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Alert,
} from '@mui/material'
import { STATE_TAX_RATES } from '@/constants/taxRates'

const WalletMultiButton = dynamic(
  () =>
    import('@solana/wallet-adapter-react-ui').then(
      (mod) => mod.WalletMultiButton,
    ),
  {
    ssr: false,
    loading: () => (
      <Box
        sx={{
          width: '200px',
          height: '40px',
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      />
    ),
  },
)

export default function TaxCalculator() {
  const { connected, publicKey } = useWallet()
  const { user, isAuthenticated } = useAuth()
  const [loading, setLoading] = useState(false)
  const [taxInfo, setTaxInfo] = useState<WalletTaxInfo | null>(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear() - 1)
  const [selectedState, setSelectedState] = useState('North Carolina')
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const addToast = useToastMessage()

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    async function fetchTaxInfo() {
      if (connected && publicKey && user && isAuthenticated) {
        setLoading(true)
        setError(null)
        try {
          const rpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_URL
          if (!rpcUrl) {
            throw new Error('Solana RPC URL not configured')
          }

          const connection = new Connection(rpcUrl, 'confirmed')

          try {
            await connection.getLatestBlockhash()
          } catch (error) {
            throw new Error(
              `Failed to connect to Solana network. Please try again later. ${error}`,
            )
          }

          let info: WalletTaxInfo
          try {
            info = await generateWalletTaxInfo(
              publicKey.toString(),
              connection,
              selectedYear,
            )
          } catch (error) {
            console.error('Error generating wallet tax info:', error)
            throw new Error(
              'Failed to generate tax information. Please try again later.',
            )
          }

          // Calculate state tax
          const totalGains =
            info.summary.shortTermGains + info.summary.longTermGains
          const stateTax = calculateStateTax(totalGains, selectedState)
          const effectiveStateTaxRate =
            totalGains > 0 ? (stateTax / totalGains) * 100 : 0

          // Add state tax information to the summary
          const updatedInfo = {
            ...info,
            summary: {
              ...info.summary,
              stateTax,
              stateCode: selectedState,
              effectiveStateTaxRate,
            },
          }

          setTaxInfo(updatedInfo)

          // Save tax info to Firebase
          try {
            if (!user?.uid) {
              throw new Error('User not authenticated')
            }

            // Ensure we have a valid auth state
            if (!isAuthenticated) {
              throw new Error('Please sign in to save your tax information')
            }

            // Validate tax info structure
            if (!updatedInfo.address) {
              throw new Error('Missing wallet address in tax information')
            }
            if (!updatedInfo.year) {
              throw new Error('Missing year in tax information')
            }
            if (!updatedInfo.summary) {
              throw new Error('Missing summary in tax information')
            }
            if (!updatedInfo.transactions) {
              throw new Error('Missing transactions in tax information')
            }
            if (!Array.isArray(updatedInfo.transactions)) {
              throw new Error('Transactions must be an array')
            }

            // Log the data being sent for debugging
            console.log('Saving tax data:', {
              userId: user.uid,
              address: updatedInfo.address,
              year: updatedInfo.year,
              summaryKeys: Object.keys(updatedInfo.summary),
              transactionsLength: updatedInfo.transactions.length
            })

            await taxifyFunctions.saveTaxData(user.uid, updatedInfo)
            addToast({
              title: 'Success',
              description: 'Tax information saved successfully',
              type: 'success',
            })
          } catch (error) {
            console.error('Error saving tax data:', error)
            let errorMessage = 'Failed to save tax information. Please try again later.'

            if (error instanceof FirebaseError) {
              console.error('Firebase Error Details:', {
                code: error.code,
                message: error.message
              })

              switch (error.code) {
                case 'functions/internal':
                case 'internal':
                  errorMessage = 'Server error while saving tax data. Please try again later.'
                  break
                case 'functions/unauthenticated':
                case 'unauthenticated':
                  errorMessage = 'Please sign in to save your tax information.'
                  break
                case 'functions/permission-denied':
                case 'permission-denied':
                  errorMessage = 'You do not have permission to save this tax information.'
                  break
                case 'functions/invalid-argument':
                  errorMessage = 'Invalid tax data format. Please try again.'
                  break
                case 'functions/unavailable':
                  errorMessage = 'Service is temporarily unavailable. Please try again later.'
                  break
                case 'functions/deadline-exceeded':
                  errorMessage = 'Request timed out. Please try again.'
                  break
                default:
                  errorMessage = `Error: ${error.message || 'Unknown error occurred'}`
              }
            } else if (error instanceof Error) {
              errorMessage = `Error: ${error.message}`
            }

            setError(errorMessage)
            addToast({
              title: 'Error',
              description: errorMessage,
              type: 'error',
            })
          }
        } catch (error) {
          console.error('Error in tax calculator:', error)
          const errorMessage =
            error instanceof Error
              ? error.message
              : 'An unexpected error occurred'
          setError(errorMessage)
          addToast({
            title: 'Error',
            description: errorMessage,
            type: 'error',
          })
        } finally {
          setLoading(false)
        }
      }
    }

    if (mounted) {
      fetchTaxInfo()
    }
  }, [
    connected,
    publicKey,
    selectedYear,
    selectedState,
    addToast,
    mounted,
    user,
    isAuthenticated,
  ])

  if (!mounted) {
    return null
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            color="text.primary"
          >
            Solana Tax Calculator
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Calculate your crypto taxes based on your Phantom wallet
            transactions
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}

        {!connected ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              my: 4,
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Connect your wallet to view your tax information
            </Typography>
            <WalletMultiButton />
          </Box>
        ) : (
          <Box>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="year-select-label">Tax Year</InputLabel>
                  <Select
                    labelId="year-select-label"
                    value={selectedYear}
                    label="Tax Year"
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                  >
                    {[2024, 2023, 2022].map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="state-select-label">State</InputLabel>
                  <Select
                    labelId="state-select-label"
                    value={selectedState}
                    label="State"
                    onChange={(e) => setSelectedState(e.target.value as string)}
                  >
                    {Object.entries(STATE_TAX_RATES).map(([state, info]) => (
                      <MenuItem key={state} value={state}>
                        {info}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {taxInfo && (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Short-term Gains
                      </Typography>
                      <Typography variant="h4" color="primary.main">
                        ${taxInfo.summary.shortTermGains.toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Long-term Gains
                      </Typography>
                      <Typography variant="h4" color="success.main">
                        ${taxInfo.summary.longTermGains.toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Total Income
                      </Typography>
                      <Typography variant="h4" color="info.main">
                        ${taxInfo.summary.totalIncome.toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Total Fees
                      </Typography>
                      <Typography variant="h4" color="error.main">
                        ${taxInfo.summary.totalFees.toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        State Tax
                      </Typography>
                      <Typography variant="h4" color="error.main">
                        ${taxInfo.summary.stateTax.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Effective Rate:{' '}
                        {taxInfo.summary.effectiveStateTaxRate.toFixed(2)}%
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}

            {taxInfo && taxInfo.transactions.length > 0 && (
              <Box sx={{ mt: 8 }}>
                <Typography variant="h4" gutterBottom color="text.primary">
                  Transaction History
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Fee</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {taxInfo.transactions.map((tx, index) => (
                        <TableRow key={index}>
                          <TableCell>{tx.type}</TableCell>
                          <TableCell>
                            {new Date(tx.timestamp).toLocaleDateString()}
                          </TableCell>
                          <TableCell>{tx.amount}</TableCell>
                          <TableCell>${tx.price}</TableCell>
                          <TableCell>${tx.fee || 0}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </Box>
        )}
      </Container>
    </Box>
  )
}
