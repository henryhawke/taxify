import Link from '@/components/routing/Link'
import Image from 'next/image'
import logoHorizontal from '@/assets/img/logo/logo.png'
// import logoHorizontalInvert from '@/assets/img/logo/TaxfyLogoSquareInvert.svg'
import clsx from 'clsx'

type Props = {
  className?: string
  href?: string
  onClick?: () => void
}

export default function LogoHorizontalLink({
  className,
  href = '/',
  ...rest
}: Props) {
  return (
    <>
      <Link href={href} {...rest}>
        <span className="sr-only">Taxfy</span>
        <Image
          src={logoHorizontal}
          alt="Taxfy Framework"
          className={clsx('dark:hidden ', className)}
          unoptimized
        />
        <Image
          src={logoHorizontal} //should be logoHorizontalInvert
          alt="Taxfy Framework"
          className={clsx('hidden dark:block', className)}
          unoptimized
        />
      </Link>
    </>
  )
}
