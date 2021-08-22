import React, { Component } from 'react'
import { Col,Form, Button} from 'react-bootstrap';
import './LogIn.css'
import Header from '../landing/Header'

const SignUp = () => {
     return (

          <div className="signUpForm">
               
               <h3>Sign Up</h3>
               <Form>
                    
                    <Form.Group controlId="signupName">
                         <Form.Label>Name</Form.Label>
                         <Form.Control />
                    </Form.Group>
                   
                    <Form.Group controlId="signupEmail">
                         <Form.Label>Email</Form.Label>
                         <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="signupPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="reEnterPassword">
                         <Form.Label>Re-enter Password</Form.Label>
                         <Form.Control type="password" placeholder="Re-enter Password" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                         <Form.Label>Mobile No.</Form.Label>
                         <Form.Control />
                    </Form.Group>


                    <Form.Group id="formGridCheckbox">
                         <Form.Check type="checkbox" label="Recieve newsletter" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                         Sign Up
                    </Button>
               </Form> 
          
          </div>
     )
}


export default SignUp
