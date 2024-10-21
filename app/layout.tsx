import type { Metadata } from 'next'

import './globals.css'
// import Navbar from './_components/Navbar'
// import Footer from './_components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Vica Blog',
    default: 'Vica Blog', // a default is required when creating a template
  },
  description: 'Vica Blog Page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
