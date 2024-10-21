import type { Metadata } from 'next'
import Footer from '../_components/Footer'

export const metadata: Metadata = {
  title: 'Auth',
  description: 'next app auth',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <section className="h-[calc(100vh-64px)] w-full flex justify-center items-center">
        {children}
      </section>
      <Footer />
    </>
  )
}
