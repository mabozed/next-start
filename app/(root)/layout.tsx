import Footer from '../_components/Footer'
import Navbar from '../_components/Navbar'

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
