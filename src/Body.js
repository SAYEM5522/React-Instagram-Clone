import React from 'react'
import "./Body.css"
import Post from './Post'
import PostLeft from './PostLeft'
import StoryRells from './StoryRells'
const Body = () => {
  return (
    <div className="body">
      <div className="body__info">
      <StoryRells
    />
      <PostLeft/>
      </div>
  
    <Post/>
    <Post/>
    <Post/>
  
    </div>
  )
}

export default Body
