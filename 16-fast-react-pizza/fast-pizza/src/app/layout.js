import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import Header from './ui/Header'
import CartOverview from './cart/CartOverview'
import { Providers } from './store/provider'



export const metadata = {
  title: 'Fast-Pizza',
  description: 'app pizza',
}

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_mono.variable}`} >
      <body className='bg-stone-100'>

        <Providers>
          <div className='grid h-screen grid-rows-[auto_1fr_auto]'>

            <Header />
            <div className='overflow-scroll '>

              <main className="max-w-3xl mx-auto">
                {children}
              </main>
            </div>

            <CartOverview />
          </div>

        </Providers>





      </body>
    </html >
  )
}
