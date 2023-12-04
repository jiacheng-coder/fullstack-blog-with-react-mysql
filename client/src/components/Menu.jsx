import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GET } from '../request'

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GET('/api/posts', {
          cat,
        })
        setPosts(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [cat])

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post => (
        <div className='post' key={post.id}>
          <img src={`../upload/${post?.img}`} alt='' />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
