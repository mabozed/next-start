'use client'

import { posts } from '@/app/_lib/posts'
// import { Metadata } from 'next'
import { useParams } from 'next/navigation'

const PostPage = () => {
  const { slug } = useParams()
  const post = posts?.filter((item) => item.id === slug)[0]
  return (
    <div className="flex flex-col flex-1 justify-center gap-16 px-16 font-bold">
      <h3 className="text-4xl">{post.title}</h3>
      <p>{post.desc}</p>
    </div>
  )
}

export default PostPage
