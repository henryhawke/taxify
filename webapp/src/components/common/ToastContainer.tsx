import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { toastsState } from '@/store/toasts'
import { Alert, Snackbar, Stack } from '@mui/material'

export default function ToastContainer() {
  const [toasts, setToasts] = useRecoilState(toastsState)

  useEffect(() => {
    if (toasts.length > 0) {
      const toast = toasts[0]
      const timer = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id))
      }, toast.duration || 5000)

      return () => clearTimeout(timer)
    }
  }, [toasts, setToasts])

  return (
    <Stack
      spacing={2}
      sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 2000 }}
    >
      {toasts.map((toast) => (
        <Snackbar
          key={toast.id}
          open={true}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            severity={toast.type}
            sx={{ width: '100%' }}
            onClose={() =>
              setToasts((prev) => prev.filter((t) => t.id !== toast.id))
            }
          >
            <div>
              <div className="font-semibold">{toast.title}</div>
              {toast.description && (
                <div className="mt-1">{toast.description}</div>
              )}
            </div>
          </Alert>
        </Snackbar>
      ))}
    </Stack>
  )
}
