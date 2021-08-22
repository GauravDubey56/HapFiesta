// import React, { Component, useContext } from 'react'
// import { Form, Button, Col, Container } from 'react-bootstrap'
// import '../forms.css'
// import {GlobalContext} from '../../../context/EventContext';
// export class Create extends Component {
     
//      constructor(props) {
//           super(props);
//           this.state = {
//                title : "",
//                desc : "",
//                entry_fee : "",
//                eligibility : "",
//                keywords : "",
//                reg_limit : "",
//                team_size: ""
     
//           }
//           this.handleSubmit = this.handleSubmit.bind(this);
//           this.handleInputChange = this.handleInputChange.bind(this);
//      }

//      handleSubmit(event) {
//           // const { addEvent } = useContext(GlobalContext);
//           alert(this.state.title + 'created');
//           event.preventDefault();
//      }
      
//      handleInputChange(event) {
//           const target = event.target;
//           const value = target.value;
//           const name = target.name;
      
//           this.setState({
//             [name]: value
//           });
//           console.log(this.state);
//      }
 
//      render() {
//           return (
//                <div className='form'>
//                     <Container>
//                          <h3>New Event</h3>
//                     <Form>
//                          {/* Title */}
//                          <Form.Row>
//                               <Col xs={6}>
//                               <Form.Group controlId="title">
//                                    <Form.Label>Title</Form.Label>
//                                    <Form.Control type="text" placeholder="Title..." name="title" onChange={this.handleInputChange}/>
//                               </Form.Group> 
//                               </Col>           
//                          </Form.Row>

                        
//                          <Form.Row>
//                               {/* Select eligibilty */}
//                               <Col xs={2}>
//                               <Form.Group controlId="eligibilty" >
//                                    <Form.Label>Eligibilty</Form.Label>
//                                    <Form.Control as="select" defaultValue="Choose..." name="eligibility" onChange={this.handleInputChange}>
//                                         <option>Choose...</option>
//                                         <option>High school passout</option>
//                                         <option>Undergraduate</option>
//                                         <option>Postgraduate</option>
//                                         <option>Research fellow</option>
//                                    </Form.Control>
//                               </Form.Group>
//                               </Col>

//                               {/* Registration fee */}
//                               <Col xs={2}>
//                               <Form.Group controlId="entry_fee">
//                                    <Form.Label>Price per entry</Form.Label>
//                                    <Form.Control placeholder="In INR" name="entry_fee" onChange={this.handleInputChange}/>
//                               </Form.Group>
//                               </Col>     
//                          </Form.Row>
                         


//                          <Form.Row>
//                          {/* Select keywords */}
//                          <Col xs={6}>
//                          <Form.Group controlId="keywords">
//                               <Form.Label>Keywords</Form.Label>
//                               <Form.Control as="select" defaultValue="Choose..." name="keywords" onChange={this.handleInputChange}>
//                                         <option>Hackathon</option>
//                                         <option>Social work</option>
//                                         <option>Conference</option>
//                                         <option>Business, economics and finance</option>
//                                         <option>Literature</option>
//                                         <option>Quiz</option>
//                               </Form.Control>
//                          </Form.Group>
//                          </Col>
//                          </Form.Row>
                         
//                          <Form.Row>
//                          {/* Registration limit */}
//                          <Col xs={3}>
//                          <Form.Group controlId="reg_limit">
//                               <Form.Label>Registration limit</Form.Label>
//                               <Form.Control placeholder="Fill if registration is limited" name="reg_limit" onChange={this.handleInputChange}/>
//                          </Form.Group>
//                          </Col>

//                          {/* reg_limit */}
//                          <Col xs={3}>
//                          <Form.Group controlId="team_size">
//                               <Form.Label>Team Size</Form.Label>
//                               <Form.Control placeholder="e.g. : 1-4 , 2-5" name="team_size" onChange={this.handleInputChange} />
//                          </Form.Group>
//                          </Col>
//                          </Form.Row>
//                          <Form.Group>
//                               <Form.Row>
//                               <Col xs={5}>
//                               <Form.Label>Description</Form.Label>
//                               <Form.Control name="desc" as="textarea" rows={3} placeholder="Describe other important details.." onChange= {this.handleInputChange}/>
//                               </Col>
//                               </Form.Row>
//                          </Form.Group>

//                          <Button variant="primary" type="submit" onSubmit= {this.handleSubmit}>
//                               Submit
//                          </Button>
//                     </Form>
//                     </Container>
//                </div>
//           )
//      }
// }

// export default CreateEvent



