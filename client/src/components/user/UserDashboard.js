import { useContext, useEffect } from 'react';
import { Card, ListGroupItem, ListGroup, Container } from 'react-bootstrap';
import '../user/userDashboard.css'
import { GlobalContext } from '../../context/EventContext';
const UserDashboard = () => {
     

     const {events, getEvents} = useContext(GlobalContext);

     useEffect(() => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          getEvents();
          
          
        }, []);
     
          return events.map((upcomingEvent) =>
               

                    <Card style={{ width: '18rem' }} className = "event-info">
                         <Card.Body>
                              <Card.Title>{upcomingEvent.title}</Card.Title>
                              <Card.Text>
                                   {upcomingEvent.desc}
                              </Card.Text>
                         </Card.Body>
                         <ListGroup className="list-group-flush">
                              <ListGroupItem>Registration fee: INR {upcomingEvent.entry_fee}</ListGroupItem>
                              <ListGroupItem>Eligibilty : {upcomingEvent.eligibilty}</ListGroupItem>
                              <ListGroupItem>{upcomingEvent.registration_count}x Registered </ListGroupItem>
                         </ListGroup>
                         <Card.Body>
                              <Card.Link href="/Register">Register</Card.Link>
                         </Card.Body>
                    </Card>
               
          );
     
}

export default UserDashboard
