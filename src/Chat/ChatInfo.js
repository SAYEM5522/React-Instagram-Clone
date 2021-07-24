import React from 'react'
import "./ChatInfo.css"
import Message from './Message'
import Sidebar from './Sidebar'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

const ChatInfo = () => {
  return (
    <div className="chatInfo">
      <Router>
        <Switch>
          <Route path="/inbox">
          <Sidebar/>
          <Message/>
          </Route>
          <Route path="/inbox/chat:id">
          <Message/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default ChatInfo
