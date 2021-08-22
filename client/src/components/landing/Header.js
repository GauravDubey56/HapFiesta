
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Homepage from './Homepage';
import Login from '../login/Login';
import SignUp from '../login/SignUp';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState, useContext } from 'react';

const Header = ({username, isLoggedIn, handleLogout}) => {
    const name = username;
     if(!isLoggedIn){
     return (
          
          <Router>
               <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                         <Navbar.Brand href="/"><h4>Event Manager</h4></Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mr-auto">

                              </Nav>

                              <Nav>

                                   <Nav.Link href="/"><h6>Home</h6></Nav.Link>
                                   <Nav.Link href="/Login"><h6>Log in</h6></Nav.Link>
                                   <Nav.Link href="/SignUp"><h6>Sign Up</h6></Nav.Link>
                              </Nav>

                         </Navbar.Collapse>
                    </Navbar>


               </div>
          </Router>
     )
}

else if (isLoggedIn) {
     return (
          <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home"><h4>Event Manager</h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="mr-auto">
                              <Nav.Link href="/CreateEvents"><h6>New Event</h6></Nav.Link>
                              <Nav.Link href="/Dashboard"><h6>Dashboard</h6></Nav.Link>
                              <Nav.Link href="/UserDashboard"><h6>Explore</h6></Nav.Link>
                              <h6>
                                   <NavDropdown title="More" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>

                                   </NavDropdown>
                              </h6>
                         </Nav>
                         <Nav>

                              <Nav.Link href="/LogIn" onClick = {() => handleLogout}><Button style={{ float: 'inherit' }} onClick><h6>Logout</h6></Button></Nav.Link>
                         </Nav>
                    </Navbar.Collapse>
               </Navbar>

          </div>
     )

}
// else if (this.state.userType === 'attendee') {
//      return (
//           <div>
//                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//                     <Navbar.Brand href="#home"><h4>Event Manager</h4></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                          <Nav className="mr-auto">
//                               <Nav.Link href="#NewEvent"><h6>Events</h6></Nav.Link>
//                               <Nav.Link href="#AdminDashboard"><h6>Dashboard</h6></Nav.Link>
//                               <h6>
//                                    <NavDropdown title={this.state.FirstName} id="basic-nav-dropdown">
//                                         <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
//                                         <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
//                                         <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>

//                                    </NavDropdown>
//                               </h6>
//                          </Nav>
//                          <Nav>

//                               <Nav.Link href="#home"><Button style={{ float: 'inherit' }} onClick><h6>Logout</h6></Button></Nav.Link>
//                          </Nav>
//                     </Navbar.Collapse>
//                </Navbar>

//                </div>
//           )

// }


}
export default Header;
