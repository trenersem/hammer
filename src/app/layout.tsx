import { inter, roboto } from './fonts'
import './globals.css'
import './styles/app.scss';
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Hammer',
  description: 'Full range of handyman services',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  openGraph: {
    images: '/og-image.png',
  },
    alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
   themeColor: 'black',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
         className={`${inter.className} ${roboto.className}`}
      >
        {children}
      </body>
    </html>
  )
}
