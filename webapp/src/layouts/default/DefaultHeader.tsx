import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useCallback, useEffect, useState, Fragment } from 'react'
import { useTranslation } from 'next-i18next'
import LanguageChanger from '@/components/utils/LanguageChanger'
import ColorModeChanger from '@/components/utils/ColorModeChanger'
import Link from '@/components/routing/Link'
import { defaultMainNav } from '@/config/navs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import siteConfig from '@/config/site'
import Button from '@/components/common/atoms/Button'
import Image from 'next/image'

export default function DefaultHeader() {
  const { t } = useTranslation()

  const [scrollY, setScrollY] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(false)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
    if (window.scrollY > 104 && scrollY > window.scrollY) {
      setIsScrollingUp(true)
    } else {
      setIsScrollingUp(false)
    }
  }, [setScrollY, setIsScrollingUp, scrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      {isScrollingUp && (
        <div className="h-24 bg-opacity-80 dark:bg-opacity-80" />
      )}
      <header
        className={
          isScrollingUp
            ? 'fixed top-0 z-10 h-24 w-full bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80'
            : 'relative z-10 h-24 w-full'
        }
      >
        <Popover
          className={
            isScrollingUp
              ? 'fixed top-0 h-24 w-full bg-opacity-80 dark:bg-opacity-80'
              : 'relative h-24 w-full'
          }
        >
          {({ close }) => (
            <>
              <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={40}
                      height={40}
                      className="h-10 w-auto sm:h-10"
                    />
                    <Image
                      src="/taxfy.png"
                      alt="Taxfy"
                      width={80}
                      height={40}
                      className="ml-2 h-10 w-auto sm:h-10"
                    />
                  </Link>
                </div>
                <div className="-my-2 -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:text-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-200">
                    <span className="sr-only">{t('openMenu')}</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                  {defaultMainNav.map((nav) => (
                    <Link
                      key={`${nav.name} DefaultHeader.defaultMainNav`}
                      href={nav.href ?? ''}
                      className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-200"
                    >
                      {t(nav.name)}
                    </Link>
                  ))}
                </Popover.Group>
                <div className="hidden items-center justify-end gap-3 md:flex md:flex-1 lg:w-0">
                  <Button
                    href="/auth/login"
                    className="rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {t('login')}
                  </Button>
                  <LanguageChanger />
                  <ColorModeChanger />
                </div>
              </div>
              <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 origin-top-right transform bg-white p-2 transition md:hidden dark:bg-gray-900"
                >
                  <div className="shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="px-5 pt-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <Link
                            href="/"
                            className="flex items-center"
                            onClick={() => close()}
                          >
                            <Image
                              src="/logo.png"
                              alt="Logo"
                              width={32}
                              height={32}
                              className="h-8 w-auto sm:h-10"
                            />
                            <Image
                              src="/taxfy.png"
                              alt="Taxfy"
                              width={64}
                              height={32}
                              className="ml-2 h-8 w-auto sm:h-10"
                            />
                          </Link>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:text-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-200">
                            <span className="sr-only">{t('closeMenu')}</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 py-8">
                      <div className="grid grid-cols-1 gap-8">
                        {defaultMainNav.map((nav) => (
                          <Link
                            key={`${nav.name} DefaultHeader.defaultMainNav.mobile`}
                            href={nav.href ?? ''}
                            className="block w-full text-base font-medium text-gray-700 hover:text-gray-900 active:text-gray-800 dark:text-gray-50 dark:hover:text-gray-200"
                            onClick={() => close()}
                          >
                            {t(nav.name)}
                          </Link>
                        ))}
                        <Link
                          href="/auth/login"
                          className="block w-full text-base font-medium text-gray-700 hover:text-gray-900 active:text-gray-800 dark:text-gray-50 dark:hover:text-gray-200"
                          onClick={() => close()}
                        >
                          {t('login')}
                        </Link>
                        <div className="flex flex-1 items-center justify-end gap-3">
                          <LanguageChanger />
                          <ColorModeChanger />
                          <a
                            href={`https://github.com/henryhawke/taxfy-cli`}
                            className="group text-gray-700 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-200"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faGithub}
                              size="sm"
                              aria-label="GitHub icon"
                              className="ml-2 mt-1.5 h-5 w-5"
                            />
                          </a>
                          <a
                            href={`${siteConfig.discordInvitationLink}`}
                            className="group text-gray-700 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-200"
                            aria-label="Discord Server Invitation"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faDiscord}
                              size="sm"
                              aria-label="Discord icon"
                              className="ml-2 mt-1.5 h-5 w-5"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </header>
    </>
  )
}
