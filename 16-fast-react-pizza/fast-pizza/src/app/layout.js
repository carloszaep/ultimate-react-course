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
        <div className='grid h-screen grid-rows-[auto_1fr_auto]'>

          <Header />
          <div className='overflow-scroll my-10'>

            <main className="max-w-3xl m-auto">
              {children}
            </main>
          </div>

          <CartOverview />
        </div>
      </body>
    </html>
  )
}
