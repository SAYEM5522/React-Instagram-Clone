import React from 'react'
import"./PostInfo.css"
const PostInfo = ({img}) => {
  return (
    <div className="postInfo">
     <img className="postInfo__logo" src={img} alt=""/>
    </div>
  )
}

export default PostInfo
