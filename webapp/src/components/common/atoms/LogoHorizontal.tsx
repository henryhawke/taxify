import Image from 'next/image'
import logoHorizontal from '@/assets/img/logo/TaxifyLogoHorizontal.svg'
import logoHorizontalInvert from '@/assets/img/logo/TaxifyLogoHorizontalInvert.svg'
import clsx from 'clsx'

type Props = {
  className?: string
  onClick?: () => void
}

export default function LogoHorizontal({ className, ...rest }: Props) {
  return (
    <>
      <div {...rest}>
        <span className="sr-only">Taxify</span>
        <Image
          src={logoHorizontal}
          alt="Taxify Framework"
          className={clsx('dark:hidden ', className)}
          unoptimized
        />
        <Image
          src={logoHorizontalInvert}
          alt="Taxify Framework"
          className={clsx('hidden dark:block', className)}
          unoptimized
        />
      </div>
    </>
  )
}
