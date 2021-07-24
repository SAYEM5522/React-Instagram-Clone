import { Avatar } from '@material-ui/core'
import React from 'react'
import { selectuser } from '../features/userSlice'
import {useSelector,useDispatch} from "react-redux"
import "./SidebarChat.css"
import { setChat } from '../features/chatSlice'
import { Link } from 'react-router-dom'
const SidebarChat = () => {
  const dispatch=useDispatch()
  const user=useSelector(selectuser)
  const chatDetail=()=>{
    dispatch(
        setChat({
            chatId:user.id,
            chatName:user.name,
            chatImage:user.photo 
        })
    )
  }
  return (
    <>
    <Link to={`/inbox/chat:${user.id}`}>
    <div className="sidebarChat" onClick={chatDetail}>
     <Avatar style={{width:"43px",height:"43px"}} className="sidebarChat__avatar" src={user.photo} alt=""/>
     <div className="sidebarChat__info">
       <h4>{user.name}</h4>
       <p>Hey whats up <span>.34 w</span></p>
     </div>
    </div>
    </Link>
  
    </>
  )
}

export default SidebarChat
