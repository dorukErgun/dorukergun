import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Doruk Ergün',
  description: 'Portfolio Page for Doruk ERGÜN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary static md:flex overflow-auto`}>
        <div className="w-full static md:w-1/3 md:sticky md:top-0 md:h-screen overflow-hidden">
          <Header />
        </div>
        <div className="w-full md:w-2/3">
          {children}
        </div>
      </body>
    </html>
  )
}
