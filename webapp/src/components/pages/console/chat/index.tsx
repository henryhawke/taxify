import { useEffect, useState } from 'react'
import ErrorBoundary from '@/components/common/ErrorBoundary'
import LoadingScreen from '@/components/common/LoadingScreen'
import { Container, Typography, Paper } from '@mui/material'

export default function ChatPage() {
  return (
    <ErrorBoundary>
      <ChatContent />
    </ErrorBoundary>
  )
}

function ChatContent() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize chat
    const init = async () => {
      try {
        // Add chat initialization logic here
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated loading
      } catch (error) {
        console.error('Failed to initialize chat:', error)
      } finally {
        setLoading(false)
      }
    }

    void init()
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <Container maxWidth="lg" className="py-8">
      <Paper className="p-6">
        <Typography variant="h5" gutterBottom>
          Tax Chat Assistant
        </Typography>
        {/* Add your chat interface components here */}
      </Paper>
    </Container>
  )
} 