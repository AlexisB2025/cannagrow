// pages/index.js
import Link from 'next/link'

export default function Home() {
  const stories = Array.from({ length: 5 }).map((_, i) => `Usuario_${i + 1}`)
  const posts = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    user: `Usuario_${i + 1}`,
    description: `Descripción de la publicación ${i + 1}`,
  }))

  return (
    <div className="container">
      <h1>Feed Cannagrow</h1>

      <div className="stories">
        {stories.map((user, idx) => (
          <div key={idx} className="story">
            {user}
          </div>
        ))}
      </div>

      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <strong>{post.user}</strong>
            <p>{post.description}</p>
            <Link href="#">Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
