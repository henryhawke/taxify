import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useWallet } from '@solana/wallet-adapter-react'
import { Connection } from '@solana/web3.js'
import { WalletTaxInfo } from '@/types/tax'
import { generateWalletTaxInfo, IRS_GUIDANCE } from '@/utils/taxCalculator'
import dynamic from 'next/dynamic'
import LoadingScreen from '@/components/common/LoadingScreen'
import useToastMessage from '@/hooks/useToastMessage'
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
} from '@mui/material'

const WalletMultiButton = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false },
)

export default function TaxCalculator() {
  const { t } = useTranslation()
  const { connected, connecting, publicKey } = useWallet()
  const [loading, setLoading] = useState(false)
  const [taxInfo, setTaxInfo] = useState<WalletTaxInfo | null>(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const addToast = useToastMessage()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    async function fetchTaxInfo() {
      if (connected && publicKey) {
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

          const info = await generateWalletTaxInfo(
            publicKey.toString(),
            connection,
            selectedYear,
          )
          setTaxInfo(info)
        } catch (error) {
          console.error('Error fetching tax info:', error)
          const errorMessage =
            error instanceof Error
              ? error.message
              : 'Failed to fetch tax information'
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
  }, [connected, publicKey, selectedYear, addToast, mounted])

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
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                sx={{ minWidth: 120 }}
                disabled={connecting}
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
