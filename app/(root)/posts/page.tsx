import { posts } from '@/app/_lib/posts'
import Link from 'next/link'

const PostsPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-10 px-16 font-bold">
      {posts?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.desc}</p>
          <Link href={`/posts/${post.id}`} className="text-blue-700 underline">
            read more
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostsPage
