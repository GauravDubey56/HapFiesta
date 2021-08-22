import {useState, useContext} from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap'
import '../forms.css'
import {GlobalContext} from '../../../context/EventContext';
function CreateEvent() {
     const { addEvent } = useContext(GlobalContext);
     const [title, setTitle] = useState('');
     const [desc, setDesc] = useState('');
     const [entry_fee, setFee] = useState(0);
     const [eligibility, setEligibilty] = useState('');
     const [reg_limit, setLimit] = useState(0);
     const [team_size, setTeamLimit] = useState('');
     const [keywords, setKeyword] = useState('');
     // const [newEvent, setEvent] = useState({
     //           title : "",
     //           desc : "",
     //           entry_fee : "",
     //           eligibility : "",
     //           keywords : "",
     //           reg_limit : "",
     //           team_size: ""
     // })
     function handleSubmit(e){
          e.preventDefault();
          const newEvent = {
               title,
               desc,
               keywords,
               entry_fee: +entry_fee,
               eligibility,
               reg_limit: +reg_limit,
               team_size
          }
          addEvent(newEvent)
          alert(newEvent+ 'created');
          
     }
      
     function handleInputChange(e) {
          const target = e.target;
          const value = target.value;
          const name = target.name;
          // setEvent({
          //   ...newEvent,
          //   [name]: value
          // });
          
     }
 
     return (
          <div className='form'>
                    <Container>
                         <h3>New Event</h3>
                    <Form onSubmit= {handleSubmit}>
                         {/* Title */}
                         <Form.Row>
                              <Col xs={6}>
                              <Form.Group controlId="title">
                                   <Form.Label>Title</Form.Label>
                                   <Form.Control type="text" placeholder="Title..." name="title" onChange={(e) => setTitle(e.target.value)}/>
                              </Form.Group> 
                              </Col>           
                         </Form.Row>

                        
                         <Form.Row>
                              {/* Select eligibilty */}
                              <Col xs={2}>
                              <Form.Group controlId="eligibilty" >
                                   <Form.Label>Eligibilty</Form.Label>
                                   <Form.Control as="select" defaultValue="Choose..." name="eligibility" onChange = {(e) => setEligibilty(e.target.value)}>
                                        <option>Choose...</option>
                                        <option>High school passout</option>
                                        <option>Undergraduate</option>
                                        <option>Postgraduate</option>
                                        <option>Research fellow</option>
                                   </Form.Control>
                              </Form.Group>
                              </Col>

                              {/* Registration fee */}
                              <Col xs={2}>
                              <Form.Group controlId="entry_fee">
                                   <Form.Label>Price per entry</Form.Label>
                                   <Form.Control placeholder="In INR" name="entry_fee" onChange = {(e) => setFee(e.target.value)}/>
                              </Form.Group>
                              </Col>     
                         </Form.Row>
                         


                         <Form.Row>
                         {/* Select keywords */}
                         <Col xs={6}>
                         <Form.Group controlId="keywords">
                              <Form.Label>Keywords</Form.Label>
                              <Form.Control as="select" defaultValue="Choose..." name="keywords" onChange = {(e) => setKeyword(e.target.value)}>
                                        <option>Hackathon</option>
                                        <option>Social work</option>
                                        <option>Conference</option>
                                        <option>Business, economics and finance</option>
                                        <option>Literature</option>
                                        <option>Quiz</option>
                              </Form.Control>
                         </Form.Group>
                         </Col>
                         </Form.Row>
                         
                         <Form.Row>
                         {/* Registration limit */}
                         <Col xs={3}>
                         <Form.Group controlId="reg_limit">
                              <Form.Label>Registration limit</Form.Label>
                              <Form.Control placeholder="Fill if registration is limited" name="reg_limit" onChange = {(e) => setLimit(e.target.value)}/>
                         </Form.Group>
                         </Col>

                         {/* reg_limit */}
                         <Col xs={3}>
                         <Form.Group controlId="team_size">
                              <Form.Label>Team Size</Form.Label>
                              <Form.Control placeholder="e.g. : 1-4 , 2-5" name="team_size" onChange = {(e) => setTeamLimit(e.target.value)} />
                         </Form.Group>
                         </Col>
                         </Form.Row>
                         <Form.Group>
                              <Form.Row>
                              <Col xs={5}>
                              <Form.Label>Description</Form.Label>
                              <Form.Control name="desc" as="textarea" rows={3} placeholder="Describe other important details.." onChange = {(e) => setDesc(e.target.value)}/>
                              </Col>
                              </Form.Row>
                         </Form.Group>

                         <Button variant="primary" type="submit">
                              Submit
                         </Button>
                    </Form>
                    </Container>
               </div>
     )
}

export default CreateEvent
