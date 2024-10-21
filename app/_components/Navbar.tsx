import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="h-16 w-full px-16 bg-slate-400 flex justify-between items-center">
      <div className="logo">Logo</div>
      <ul className="flex items-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login" className="bg-blue-800 p-2 rounded text-white">
          Login
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
