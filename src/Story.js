import React from 'react'
import "./Story.css"
const Story = ({img,name}) => {
  return (
    <div className="story">
      <img className="story__logo" src={img} alt=""/>
       <p>{name}</p>
    </div>
  )
}

export default Story
