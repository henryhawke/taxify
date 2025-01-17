import { Shield } from '@mui/icons-material'

export default function SecurityBadge() {
  return (
    <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
      <Shield className="mr-1.5 h-4 w-4" />
      Bank-Level Security
    </div>
  )
}
