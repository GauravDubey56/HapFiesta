
import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './components/landing/Header'
import Homepage from './components/landing/Homepage';
import {Login, SignUp} from './components/login/SignInExport';
import {Attendance, SelectEvents, Dashboard, NextEvents, CreateEvent} from './components/organizer/OrganizerExports';
import {UserDashboard, Confirmation, Register} from './components/user/UserExports';
import { UserProvider } from './context/UserContext';
import {GlobalProvider} from './context/EventContext'
function App() {

  const [username, setUsername] = useState("");
  const [isLoggedIn, setLoggedin] = useState(true);  
  const handleLogin = (user) => {
    setUsername(user);
    setLoggedin(true);
  }
  const handleLogout = () => {
    setLoggedin(false);
  }
  

  
    return (
      <GlobalProvider>
      <Router>
      <div>
        
        <Header isLoggedIn = {isLoggedIn} username={username} handleLogout = {handleLogout}/>
        <Switch>
                    <Route exact path="/">
                         <Homepage />
                    </Route>
                    {!isLoggedIn && <Route path="/Login" handleLogin = {handleLogin}>
                         <Login />
                    </Route>}
                    {!isLoggedIn && <Route path="/SignUp">
                         <SignUp />
                    </Route>}

                  {isLoggedIn && 
                  <Switch>
                  <Route path="/Dashboard">
                    <Dashboard />
                  </Route>
                  <Route path ="/CreateEvents">
                    <CreateEvent />
                  </Route>
                  <Route path ="/Attendance">
                    <Attendance />
                    <SelectEvents />
                  </Route>
                  <Route path ="/Confirmation">
                    <Confirmation />
                  </Route>
                  <Route path ="/Register">
                    <Register />
                  </Route>
                  <Route path ="/UserDashboard">
                    <UserDashboard />
                  </Route>
                  </Switch>
                  }
                    
        </Switch>      
      </div>
      </Router>
      </GlobalProvider>
    
    )
}


export default App
