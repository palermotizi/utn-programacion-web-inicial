import React, { useEffect, useState } from 'react'

 const Review = () => {
    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const obtenerPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "GET"
      })
      const posts = await response.json()
      setPosts(posts)
      setIsLoading(false)
  }

  useEffect(() => {
    obtenerPosts()

  }, [])
  /*si dejo el array vacio no se vuelve a settear el posteo */
  
  console.log(posts)
    return (
      <div>
        {
          isLoading ? 
          <h2>Cargando...</h2>
          /*siempre se recomienda porque los fetching tardan en cargar. es user friendly */
          :
          posts && posts.map(post =>
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <hr />
            </div>
          )
        }
      </div>
    )
}

export default Review