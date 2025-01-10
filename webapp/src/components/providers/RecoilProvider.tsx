'use client'
import { RecoilRoot } from 'recoil'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function RecoilProvider({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>
}
