import React from 'react'
import BlogFeed from './components/BlogFeed'


const HomePage = (posts) => {
  return (
    <div>
    <div>Welcome to the epic superhero quartet!!!</div>
    <BlogFeed posts={posts} />
    </div>
  )
}

export default HomePage