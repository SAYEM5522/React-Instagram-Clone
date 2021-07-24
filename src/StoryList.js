import React from 'react'
import "./StoryList.css"
const StoryList = ({img,name}) => {
  return (
    <div className="storyList">
     <img className="storyList__logo" src={img} alt=""/>
  <p>{name}</p>
    </div>
  )
}

export default StoryList
