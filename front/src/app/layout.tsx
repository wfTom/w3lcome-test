import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as Bai,
  Poppins,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const bai = Bai({ subsets: ['latin'], variable: '--font-bai', weight: '700' })
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Teste Dev Pl',
  description: 'Teste para desenvolvedor fullstack pleno na w3lcome',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${bai.variable}  font-sans text-gray-100 `} // bg-gray-900
      >
        {children}
      </body>
    </html>
  )
}
