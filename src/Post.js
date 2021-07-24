import React,{useState} from 'react'
import "./Post.css"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import TelegramIcon from '@material-ui/icons/Telegram';
import TurnedInNotRoundedIcon from '@material-ui/icons/TurnedInNotRounded';
import {useSelector} from "react-redux"
import { selectuser } from './features/userSlice';

const Post = () => {
  const user=useSelector(selectuser)

const [show,setShow]=useState(false)
const [show1,setShow1]=useState(false)


  return (
    <div className="post">
    <div className="post__top">
    <img className="post-top__logo" src={user.photo} alt=""/>
    <div className="post-top__info">
      <h4>{user.name}</h4>
      <p>Loction</p>
    </div>
    <MoreHorizIcon/>
    </div>
    <div className="post__middle">
   <img className="post__logo" src="https://tse1.mm.bing.net/th?id=OIP.-ZirgQE5pr8e7htQWowJIgHaHa&pid=Api&P=0&w=300&h=300"alt=""/>
    </div>
    <div className="post__bottom">
<div className="post-bottom__left">
<FavoriteRoundedIcon className={` post__whiteicon ${ show&& "post__icon"}`}  onClick={()=>setShow(!show)} />
<ChatBubbleOutlineRoundedIcon/>
<TelegramIcon/> 
</div>
<div className="post-bottom__right">
<TurnedInNotRoundedIcon className={` ${ show1&& "post__icon2"}`}  onClick={()=>setShow1(!show1)} />
</div>
    </div>

    </div>
  )
}

export default Post
