import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useWallet } from '@solana/wallet-adapter-react'
import { Connection } from '@solana/web3.js'
import { WalletTaxInfo } from '@/types/tax'
import { generateWalletTaxInfo, IRS_GUIDANCE } from '@/utils/taxCalculator'
import { STATE_TAX_RATES, calculateStateTax } from '@/utils/stateTaxRates'
import dynamic from 'next/dynamic'
import LoadingScreen from '@/components/common/LoadingScreen'
import useToastMessage from '@/hooks/useToastMessage'
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
  Link,
  Alert,
  FormControl,
  InputLabel,
} from '@mui/material'

const WalletMultiButton = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false },
)

export default function TaxCalculator() {
  const { t } = useTranslation()
  const { connected, connecting, publicKey } = useWallet()
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [taxInfo, setTaxInfo] = useState<WalletTaxInfo | null>(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedState, setSelectedState] = useState('CA')
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const addToast = useToastMessage()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    async function fetchTaxInfo() {
      if (connected && publicKey && user) {
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
              'Failed to connect to Solana network. Please try again later.',
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
            await taxifyFunctions.saveTaxData(user.uid, updatedInfo)
            addToast({
              title: 'Success',
              description: 'Tax information saved successfully',
              type: 'success',
            })
          } catch (error) {
            console.error('Error saving tax data:', error)
            if (error instanceof FirebaseError) {
              if (error.code === 'internal') {
                throw new Error(
                  'Internal server error. Please try again later.',
                )
              }
              throw new Error(`Failed to save tax data: ${error.message}`)
            }
            throw new Error(
              'Failed to save tax information. Please try again later.',
            )
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
              mt: 6,
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Connect your wallet to view your tax information
            </Typography>
            <WalletMultiButton />
          </Box>
        ) : (
          <Box sx={{ mt: 6 }}>
            <Box
              sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}
            >
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>Year</InputLabel>
                <Select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                  disabled={connecting}
                  label="Year"
                >
                  {Array.from(
                    { length: 5 },
                    (_, i) => new Date().getFullYear() - i,
                  ).map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>State</InputLabel>
                <Select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  disabled={connecting}
                  label="State"
                >
                  {Object.entries(STATE_TAX_RATES).map(([code, info]) => (
                    <MenuItem key={code} value={code}>
                      {info.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {taxInfo && (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Short-term Gains
                      </Typography>
                      <Typography variant="h4" color="success.main">
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
                      <Typography variant="h4" color="primary.main">
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
                      <Typography variant="h4" color="secondary.main">
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

            {/* IRS Guidance */}
            <Box sx={{ mt: 8 }}>
              <Typography variant="h4" gutterBottom color="text.primary">
                IRS Guidance
              </Typography>
              <Grid container spacing={3}>
                {IRS_GUIDANCE.map((guidance, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {guidance.category}
                        </Typography>
                        <Typography variant="body1" paragraph>
                          {guidance.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Reference: {guidance.irsReference}
                        </Typography>
                        <Link
                          href={guidance.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ display: 'inline-block', mt: 2 }}
                        >
                          Learn More →
                        </Link>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Transaction History */}
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
