import tw from '@/lib/tailwind'
import TaxifyLogoHorizontal from '@assets/logo/TaxifyLogoHorizontal.svg'
import TaxifyLogoHorizontalInvert from '@assets/logo/TaxifyLogoHorizontalInvert.svg'
import clsx from 'clsx'

type Props = {
  className?: string
}

export default function LogoHorizontal({ className }: Props) {
  return (
    <>
      <TaxifyLogoHorizontal
        style={tw`${clsx('h-8 md:h-10 dark:hidden', className)}`}
      />
      <TaxifyLogoHorizontalInvert
        style={tw`${clsx('hidden h-8 md:h-10 dark:flex', className)}`}
      />
    </>
  )
}
