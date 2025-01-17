import React, { createContext, useContext, useCallback, ReactNode } from 'react'
import { Alert, Snackbar } from '@mui/material'

interface ToastMessage {
  title: string
  description: string
  type: 'success' | 'error' | 'info' | 'warning'
}

interface ToastContextData {
  addToast: (message: ToastMessage) => void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export function useToastMessage() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToastMessage must be used within a ToastProvider')
  }
  return context.addToast
}

export function ToastProvider({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState<ToastMessage | null>(null)

  const addToast = useCallback((newMessage: ToastMessage) => {
    setMessage(newMessage)
    setOpen(true)
  }, [])

  const handleClose = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') return
      setOpen(false)
    },
    [],
  )

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {message && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={handleClose}
            severity={message.type}
            variant="filled"
            sx={{ width: '100%' }}
          >
            <strong>{message.title}</strong>
            {message.description && (
              <div style={{ marginTop: 4 }}>{message.description}</div>
            )}
          </Alert>
        </Snackbar>
      )}
    </ToastContext.Provider>
  )
}

export default ToastProvider
