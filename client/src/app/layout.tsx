import { TodoProvider } from '@/contexts/Todo'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

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
      <body className={`${poppins.variable} font-sans text-gray-100`}>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  )
}
