import {useState, useContext} from 'react'
import { UserContext } from '../../context/UserContext';
import { Form, Button, Container } from 'react-bootstrap';
import './LogIn.css'
const Login = () => {
     // const [user, setUser] = useState('');
     const userIdentified  = true;
     return (

          <div className="loginForm">
               <Container>
                    <h3>Log in</h3>
                    <Form>
                         <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" />
                              <Form.Text className="text-muted">
                                   {/*Can be used to show empty field message*/}
                              </Form.Text>
                         </Form.Group>

                         <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" />
                         </Form.Group>
                         <Form.Group controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Remeber me" />
                         </Form.Group>

                         { <Button variant="primary" type="submit" href="/Dashboard">
                              Login
                         </Button>}
                    </Form>
               </Container>
          </div>
     )
}
export default Login;