import React, { Component } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import SelectEvents from './SelectEvents'
const Attendance = (props) => {          
          return (
               <div>
                    <Form>

                         <Form.Row>
                              <Col xs = {5}>
                              <Form.Group as={Col} controlId="attendance_Event">
                                   <Form.Label>Event</Form.Label>
                                   <Form.Control as="select" defaultValue="Choose...">
                                   <option>Choose event..</option>
                                   <SelectEvents events = {props.events}/>
                                   </Form.Control>
                              </Form.Group>
                              </Col>
                         </Form.Row>
                         <Form.Row>
                              <Col xs = {5}>
                              <Form.Group as={Col} controlId="attendance_regNo"> 
                                   <Form.Label>Enter user registration code</Form.Label>
                                   <Form.Control />
                              </Form.Group>
                              </Col>
                         </Form.Row>
                         <Form.Row>
                              <Col xs={2}>
                         <Button variant="primary" type="submit">
                              Mark Present
                         </Button>
                              </Col>
                         </Form.Row>
                         
                    </Form>
               </div>
          )
}


export default Attendance
