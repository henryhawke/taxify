import Image from 'next/image'
import logoHorizontal from '@/assets/img/logo/logo.png'
import logoHorizontalInvert from '@/assets/img/logo/taxfy.png'
import clsx from 'clsx'

type Props = {
  className?: string
  onClick?: () => void
}

export default function LogoHorizontal({ className, ...rest }: Props) {
  return (
    <>
      <div {...rest}>
        <span className="sr-only">Taxfy</span>
        <Image
          src={logoHorizontal}
          alt="Taxfy Framework"
          className={clsx('dark:hidden ', className)}
          unoptimized
        />
        <Image
          src={logoHorizontalInvert}
          alt="Taxfy Framework"
          className={clsx('hidden dark:block', className)}
          unoptimized
        />
      </div>
    </>
  )
}
