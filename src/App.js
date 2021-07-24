import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Instagram from './Instagram';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Profile from './Profile';
import Header from './Header';
import Chat from './Chat/Chat';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/profile">
            <Header/>
            <Profile/>
          </Route>
          <Route path="/inbox">
          <Header/>
          <Chat/>
          </Route>
          <Route path="/">
          <Instagram/>
          </Route>
        </Switch>
      </Router>

    
    </div>
  );
}

export default App;
