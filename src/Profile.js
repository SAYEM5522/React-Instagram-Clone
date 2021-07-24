import React from 'react'
import { selectuser } from './features/userSlice'
import "./Profile.css"
import ProfileHeader from './ProfileHeader'
import ProfilePost from './ProfilePost'
import ProfileStory from './ProfileStory'

const Profile = () => {

  return (
    <div className="profile">
    <ProfileHeader/>
    <ProfileStory/>
    <ProfilePost/>
    </div>
  )
}

export default Profile
