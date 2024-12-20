import { Poppins, Montserrat } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})