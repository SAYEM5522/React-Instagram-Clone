import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"
const Login = () => {


  const singIn=()=>{
      auth.signInWithPopup(provider).catch(err=>{
        console.log(err)
      })
  }
  return (

  
    <div className="login">
      <div className="login__info">
      <img className="login__logo" src ='https://tse1.mm.bing.net/th?id=OIP.-ZirgQE5pr8e7htQWowJIgHaHa&pid=Api&P=0&w=300&h=300'/>
     <img className="login__logoName" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
      </div>
     
     <Button onClick={singIn}>Sign In</Button>
    </div>
  )
}

export default Login
