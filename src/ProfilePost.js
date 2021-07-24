import React from 'react'
import PostHeader from './PostHeader'
import PostList from './PostList'
import "./ProfilePost.css"
function ProfilePost() {
  return (
    <div className="profilePost">
     <PostHeader/>
     <PostList/>
    </div>
  )
}

export default ProfilePost
