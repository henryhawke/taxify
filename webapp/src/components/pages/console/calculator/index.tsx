import { useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { Connection } from '@solana/web3.js'
import { WalletTaxInfo } from '@/types/tax'
import { generateWalletTaxInfo } from '@/utils/taxCalculator'
import { calculateStateTax } from '@/utils/stateTaxRates'
import dynamic from 'next/dynamic'
import ErrorBoundary from '@/components/common/ErrorBoundary'
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
  }
)

export default function CalculatorPage() {
  return (
    <ErrorBoundary>
      <CalculatorContent />
    </ErrorBoundary>
  )
}

function CalculatorContent() {
  const { publicKey } = useWallet()
  const { user } = useAuth()
  const { showMessage } = useToastMessage()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [taxYear, setTaxYear] = useState('2024')
  const [selectedState, setSelectedState] = useState('North Carolina')
  const [taxInfo, setTaxInfo] = useState<WalletTaxInfo | null>(null)

  useEffect(() => {
    if (publicKey) {
      void fetchTaxInfo()
    }
  }, [publicKey, taxYear, selectedState])

  async function fetchTaxInfo() {
    if (!publicKey || !user) return

    try {
      setLoading(true)
      setError(null)

      const connection = new Connection(process.env.NEXT_PUBLIC_RPC_URL!)
      const walletTaxInfo = await generateWalletTaxInfo(publicKey, connection)
      const stateTaxRate = calculateStateTax(selectedState, walletTaxInfo.totalIncome)

      setTaxInfo({
        ...walletTaxInfo,
        stateTaxRate,
      })

      // Save tax data
      try {
        await taxifyFunctions.saveTaxData({
          userId: user.uid,
          walletAddress: publicKey.toString(),
          taxYear,
          state: selectedState,
          taxInfo: walletTaxInfo,
        })
      } catch (err) {
        console.error('Error saving tax data:', err)
        if (err instanceof FirebaseError) {
          showMessage(err.message, 'error')
        }
      }
    } catch (err) {
      console.error('Error fetching tax info:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch tax information')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="lg" className="py-8">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className="p-6">
            <Typography variant="h5" gutterBottom>
              Solana Tax Calculator
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Calculate your crypto taxes based on your Phantom wallet transactions
            </Typography>

            <Grid container spacing={3} className="mt-4">
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Tax Year</InputLabel>
                  <Select
                    value={taxYear}
                    label="Tax Year"
                    onChange={(e) => setTaxYear(e.target.value)}
                  >
                    <MenuItem value="2024">2024</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>State</InputLabel>
                  <Select
                    value={selectedState}
                    label="State"
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    {Object.keys(STATE_TAX_RATES).map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box className="flex h-full items-center">
                  <WalletMultiButton />
                </Box>
              </Grid>
            </Grid>

            {error && (
              <Alert severity="error" className="mt-4">
                {error}
              </Alert>
            )}

            {loading && <LoadingScreen />}

            {!loading && taxInfo && (
              <Grid container spacing={4} className="mt-4">
                {/* Summary Cards */}
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        Short-term Gains
                      </Typography>
                      <Typography variant="h5" component="div">
                        ${taxInfo.shortTermGains.toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        Long-term Gains
                      </Typography>
                      <Typography variant="h5" component="div">
                        ${taxInfo.longTermGains.toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        Total Income
                      </Typography>
                      <Typography variant="h5" component="div">
                        ${taxInfo.totalIncome.toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        Total Fees
                      </Typography>
                      <Typography variant="h5" component="div">
                        ${taxInfo.totalFees.toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* State Tax */}
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        State Tax
                      </Typography>
                      <Typography variant="body1">
                        Effective Rate: {(taxInfo.stateTaxRate * 100).toFixed(2)}%
                      </Typography>
                      <Typography variant="h5" className="mt-2">
                        ${(taxInfo.totalIncome * taxInfo.stateTaxRate).toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Transactions Table */}
                <Grid item xs={12}>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Type</TableCell>
                          <TableCell align="right">Amount</TableCell>
                          <TableCell align="right">Date</TableCell>
                          <TableCell align="right">Fee</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {taxInfo.transactions.map((tx, index) => (
                          <TableRow key={index}>
                            <TableCell>{tx.type}</TableCell>
                            <TableCell align="right">
                              ${tx.amount.toFixed(2)}
                            </TableCell>
                            <TableCell align="right">
                              {new Date(tx.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell align="right">
                              ${tx.fee.toFixed(2)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
} 