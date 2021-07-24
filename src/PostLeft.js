import React from 'react'
import { selectuser } from './features/userSlice'
import "./PostLeft.css"
import {useSelector} from "react-redux"

const PostLeft = () => {
  const user=useSelector(selectuser)
  return (
    <div className="postLeft">
      <div className="postLeft__top">
      <div className="postLeft__left">
    <img className="postLeft__logo" src={user.photo}alt=""/>
    <div className="postLeft__left-info">
      <h5>{user.name}</h5>
      <p>Md Sayem</p>
    </div>
     </div>
     <div className="postLeft__right">
     <p>Switch</p>
     </div>
      </div>
   
     <div className="postLeft__middle">
    <p>Suggested For You</p>
    <p className="postLeft__middle-text">See All</p>
     </div>
     <div className="postLeft__bottom">

     </div>
    </div>
  )
}

export default PostLeft
