import { useEffect, useState } from 'react'

export default function FetchDemo() {
  const [post, setPost] = useState(null)
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [])
  
  return (
    <>
      <h2>Post from API</h2>
      {post ? (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}