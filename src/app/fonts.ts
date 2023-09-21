import { Inter, Roboto } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Variable for CSS, use like - font-family: var(--font-inter);
  display: 'swap',
})

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap',
})