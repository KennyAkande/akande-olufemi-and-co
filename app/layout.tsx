import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Roboto_Mono, Roboto } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Akande Olufemi & Co Partners',
  description: 'Premium accounting and financial advisory services for discerning clients',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf8' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${robotoMono.variable} ${roboto.variable}`}>
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
