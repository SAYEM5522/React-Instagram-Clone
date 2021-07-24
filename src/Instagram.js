import React,{useEffect,useState} from 'react'
import Body from './Body'
import { auth } from './firebase'
import Header from './Header'
import "./Instagram.css"
import Login from './Login'
import {useDispatch,useSelector} from "react-redux"
import  { login,selectuser } from "./features/userSlice"
const Instagram = () => {
  const dispatch=useDispatch()
  const user=useSelector( selectuser);

    useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>(
        dispatch(
          login({
            photo:authUser.photoURL,
            name:authUser.displayName,
            id:authUser.uid
          })
        )
      ))
    },[dispatch])

  return (
    <div className="instagram">
      {
        user?(
          <>
          <Header/>
          <Body/>
          </>
        ):<Login/>
      }
  
    </div>
  )
}

export default Instagram
