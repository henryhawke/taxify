import tw from '@/lib/tailwind'
import TaxfyLogoHorizontal from '@assets/logo/TaxfyLogoHorizontal.svg'
import TaxfyLogoHorizontalInvert from '@assets/logo/TaxfyLogoHorizontalInvert.svg'
import clsx from 'clsx'

type Props = {
  className?: string
}

export default function LogoHorizontal({ className }: Props) {
  return (
    <>
      <TaxfyLogoHorizontal
        style={tw`${clsx('h-8 md:h-10 dark:hidden', className)}`}
      />
      <TaxfyLogoHorizontalInvert
        style={tw`${clsx('hidden h-8 md:h-10 dark:flex', className)}`}
      />
    </>
  )
}
