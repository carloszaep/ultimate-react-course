import './globals.css'
import Header from './ui/Header'
import CartOverview from './cart/CartOverview'



export const metadata = {
  title: 'Fast-Pizza',
  description: 'app pizza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-stone-100 text-stone-700'>
        <Header />
        <main>
          {children}
        </main>

        <CartOverview />
      </body>
    </html>
  )
}
