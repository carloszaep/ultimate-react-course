import { Inter } from 'next/font/google'
import './globals.css'
import Header from './ui/Header'
import CartOverview from './cart/CartOverview'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fast-Pizza',
  description: 'app pizza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>

        <CartOverview />
      </body>
    </html>
  )
}
