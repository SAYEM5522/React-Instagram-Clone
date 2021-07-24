import { Button } from '@material-ui/core'
import React from 'react'
import "./ProfileHeader.css"
import BrightnessLowRoundedIcon from '@material-ui/icons/BrightnessLowRounded';
import {useSelector} from "react-redux"
import { selectuser } from './features/userSlice';
const ProfileHeader = () => {
  const user=useSelector(selectuser)

  return (
    <div className="profileHeader">
    <div className="profileHeader__left">
    <img className="profileHeader__logo" src={user.photo} alt=""/>
    </div>
    <div className="profileHeader__right">
    <div className="profileHeader-right__top">
    <h1>{user.name}</h1>
    <Button variant="outlined">Edit Profile</Button>
    <BrightnessLowRoundedIcon/>
    </div>
    <div className="profileHeader-right__middle">
      <p><strong>3</strong> posts</p>
      <p><strong>806</strong> followers</p>
      <p><strong>139</strong>  following</p>


      </div>
      <div className="profileHeader-right__bottom">
      <h3>Md Sayem</h3>
      <p>Just a complicated person with a simple life
          Love ALLAH ❤❤❤❤💓
          Dreamer
          NSUers 🎓🎓
          ||Ex-milestonian||
</p>
      </div>
    </div>
    </div>
  )
}

export default ProfileHeader
