import { Typography } from '@mui/material'

interface Props {
  className?: string
}

export default function SolanaLogoHorizontal({ className }: Props) {
  return (
    <Typography 
      variant="h4" 
      component="div" 
      className={className}
      sx={{ 
        fontWeight: 'bold',
        color: '#14F195', // Solana's brand green
        letterSpacing: '-0.5px'
      }}
    >
      Solana
    </Typography>
  )
}
