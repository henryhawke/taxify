import { useRecoilValue } from 'recoil'
import { getToastsState } from '@/store/toasts'
import { Alert, Snackbar, Stack } from '@mui/material'

export default function ToastContainer() {
  const toasts = useRecoilValue(getToastsState())

  return (
    <Stack
      spacing={2}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 2000,
      }}
    >
      {toasts.map((toast) => (
        <Snackbar
          key={toast.id}
          open={true}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert severity={toast.type} sx={{ width: '100%' }}>
            <div className="flex flex-col">
              <span className="font-medium">{toast.title}</span>
              <span className="text-sm">{toast.description}</span>
            </div>
          </Alert>
        </Snackbar>
      ))}
    </Stack>
  )
}
