import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params

  const slug = params.slug

  return {
    title: `Posts | ${slug}`,
  }
}

// export const metadata: Metadata = {
//   title: 'Posts',
//   description: 'Blog Posts page',
// }

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
