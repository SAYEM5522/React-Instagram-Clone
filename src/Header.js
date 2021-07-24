import React,{useState} from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { selectuser } from './features/userSlice';
import {useSelector} from "react-redux"
const Header = () => {
  const [image,setImage]=useState([]);
  const user=useSelector(selectuser)
  console.log(image);
  return (
    <div className="header">
    <div className="header__left">
      <Link to="/">
      <img className="header__logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/> 
      </Link>
    
    </div>
    <div className="header__middle">
    <input placeholder="search"/>
    <SearchIcon/>
    </div>
    <div className="header__right">
      <Link to="/">
      <HomeIcon/>
      </Link>
     
      <Link to="/inbox">
      <TelegramIcon className="header__icon"/>
      </Link>
      <ArrowDropDownCircleIcon/>
      <FavoriteBorderIcon/>
      <Link to="/profile">
      <img className="header__profile" src={user.photo}alt=""/>
      </Link>
      <input type="file" id="file" onChange={(e)=>setImage(e.target.files[0])}/>
      <label for="file"><AddIcon/></label>
     
    </div>
    </div>
  )
}

export default Header
