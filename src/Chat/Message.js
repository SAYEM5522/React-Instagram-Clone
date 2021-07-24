import React from 'react'
import "./Message.css"
import InfoIcon from '@material-ui/icons/Info';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import ImageIcon from '@material-ui/icons/Image';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { selectchatId, selectchatImage, selectchatName } from '../features/chatSlice';
import {useSelector} from "react-redux"
const Message = () => {
  const chatId =useSelector(selectchatId)
  const  chatName=useSelector(selectchatName)
  const  chatImage=useSelector(selectchatImage)

  return (
    <div className="message">
     <div className="message__header">
      <div className="message__header-left">
      <img className="message__header-logo" src={chatImage} alt=""/>
      <p>{chatName}</p>
      </div>
      <div className="message__header-right">
       <InfoIcon/>
      </div>
     </div>
    <div className="messgae__list">
           <p>Hey whats up....</p>
    </div>
    <div className="message__bottom">
      <form className='message__form'>
        <div className="message__text">
        <SentimentSatisfiedIcon/>
    <input type="text" placeholder="Message.."/>
        </div>
  
    <div className="message__icon">
    <ImageIcon/>
    <FavoriteBorderIcon/>
    </div>
      </form>
    </div>
      
    </div>
  )
}

export default Message
