import '@/styles/globals.css'
import { Metadata } from 'next'
import { Sofia_Sans } from 'next/font/google'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Nekonyx',
  description: 'Web developer from somewhere in the world.'
}

const sofiaSans = Sofia_Sans({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={sofiaSans.className}>
      <body>{children}</body>
    </html>
  )
}
