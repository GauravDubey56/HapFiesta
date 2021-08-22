import React, { useState} from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-bootstrap/Modal'
import './userDashboard.css'
const Register = () => {
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = (e) => {
          e.preventDefault()
          setShow(true);
     }
          return (
               <div className = "reg_form">
               <Container>
                    <h1>
                         Register
                    </h1>
                    <Form>
                         <Form.Row>
                              <Form.Group as={Col} controlId="formGridEmail">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control type="email" placeholder="Enter email" />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridPassword">
                                   <Form.Label>Name</Form.Label>
                                   <Form.Control type="text" placeholder="Enter Name" />
                              </Form.Group>
                         </Form.Row>

                         {/* <Form.Group controlId="formGridAddress1">
                              <Form.Label>Address</Form.Label>
                              <Form.Control placeholder="1234 Main St" />
                         </Form.Group>

                         <Form.Group controlId="formGridAddress2">
                              <Form.Label>Address 2</Form.Label>
                              <Form.Control placeholder="Apartment, studio, or floor" />
                         </Form.Group>

                         <Form.Row>
                              <Form.Group as={Col} controlId="formGridCity">
                                   <Form.Label>City</Form.Label>
                                   <Form.Control placeholder="e.g. Noida" />
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridState">
                                 <Form.Label>State</Form.Label>
                                   <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                   </Form.Control>
                              </Form.Group>

                              <Form.Group as={Col} controlId="formGridZip">
                                   <Form.Label>Zip</Form.Label>
                                   <Form.Control />
                              </Form.Group>
                         </Form.Row>

                         <Form.Group id="formGridCheckbox">
                              <Form.Check type="checkbox" label="Check me out" />
                         </Form.Group> */}
                         
                         <Button variant="primary" type="submit" onClick={handleShow}>
                              Submit
                         </Button>
                    </Form>
                    <Modal show={show} onHide={handleClose}>
                         <Modal.Header closeButton>
                              <Modal.Title>Attendance Code</Modal.Title>
                         </Modal.Header>
                         <Modal.Body>
                         Woohoo, Welcome on board! <br/>
                         Your unique attendance code is:<br/>
                         {uuidv4()}
                         </Modal.Body>
                         <Modal.Footer>
                         
                              <Button variant="primary" onClick={handleClose}>
                              Okay, Thanks!
                              </Button>
                         </Modal.Footer>
                    </Modal>
               </Container>
               </div>
          )
     
}

export default Register
