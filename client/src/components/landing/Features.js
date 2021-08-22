import React, { Component } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
export class Features extends Component {
     render() {

          return (
               <div>
                    <Jumbotron fluid>

                         <h1 style={{ textAlign: 'center' }}>Manage events and track audience</h1>
                         <Container>
                              <p style={{ textAlign: 'center justify' }}>
                                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                         </p>
                         </Container>
                    </Jumbotron>
                    <Container>
                         <CardGroup>
                              <Card>

                                   <Card.Body>
                                        <Card.Title>Manage multiple events</Card.Title>
                                        <Card.Text>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                                   </Card.Text>
                                   </Card.Body>
                                   <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                   </Card.Footer>
                              </Card>
                              <Card>

                                   <Card.Body>
                                        <Card.Title>Track Audience</Card.Title>
                                        <Card.Text>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                                        </Card.Text>
                                   </Card.Body>
                                   <Card.Footer>  
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                   </Card.Footer>
                              </Card>
                              <Card>
                                   <Card.Body>
                                        <Card.Title>Payment Confirmation</Card.Title>
                                        <Card.Text>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                   </Card.Text>
                                   </Card.Body>
                                   <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                   </Card.Footer>
                              </Card>
                         </CardGroup>
                    </Container>
               </div>
          )

     }
}

export default Features
