import type { Metadata } from 'next'

import Footer from '../_components/Footer'
import Navbar from '../_components/Navbar'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'next app admin',
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <section className="h-[calc(100vh-128px)] w-full flex">
        {children}
      </section>
      <Footer />
    </>
  )
}
