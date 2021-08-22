import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
export class ContactForm extends Component {
     render() {
          return (
               <div>
                    <Container>
                         <h3><br /> Know more</h3>
                         <Form>
                              <Form.Group controlId="formBasicEmail">
                                   <Form.Label>Email address</Form.Label>
                                   <Form.Control type="email" placeholder="Enter email" />
                                   <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                              </Form.Group>

                              <Form.Group controlId="exampleForm.ControlTextarea1">
                                   <Form.Label>Message/Query</Form.Label>
                                   <Form.Control as="textarea" rows={3} />
                              </Form.Group>

                              <Form.Group controlId="formBasicCheckbox">
                                   <Form.Check type="checkbox" label="Recieve updates" />
                              </Form.Group>
                              <Button variant="primary" type="submit">
                                   Submit
                              </Button>
                         </Form>
                    </Container>

               </div>
          )
     }
}

export default ContactForm
