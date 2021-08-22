import { useContext, useEffect } from 'react'
import { CardDeck, Card, Container, Table } from 'react-bootstrap'
import '../Dashboard/Dashboard.css'
import NextEvents from './NextEvents'
import Attendance from '../Attendance/Attendance'
import { GlobalContext } from '../../../context/EventContext';
const Dashboard = () => {
     
const {events, getEvents} = useContext(GlobalContext);

useEffect(() => {
     // eslint-disable-next-line react-hooks/exhaustive-deps
     getEvents();
     
     
   }, []);
     // const upcoming_events = [
     //      {
     //           title: "ABC_Hackathon",
     //           price: 100,
     //           reg_Count: 20,
     //           event_id: 122,
     //           mode: "online",
     //           venue: "Online",
     //           description: "Dummy data..inserted by developer"
     //      },
     //      {
     //           title: "PQR_Hackathon",
     //           price: 200,
     //           reg_Count: 20,
     //           event_id: 121,
     //           mode: "online",
     //           venue: "Online",
     //           description: "Dummy data..inserted by developer"
     //      },
     //      {
     //           title: "XYZ_Hackathon",
     //           price: 300,
     //           reg_Count: 20,
     //           event_id: 123,
     //           mode: "online",
     //           venue: "Online",
     //           description: "Dummy data..inserted by developer"
     //      }
     // ]





     var total_Income = 0;
     var registrants_Count = 0;
     for (let event of events) {
          total_Income += event.entry_fee * event.registration_count;
          registrants_Count += event.registration_count;
     };

     return (
          <div>
               <Container>
                    <CardDeck className="admin-info">
                         <Card>
                              <Card.Body>
                                   <Card.Title>No. of events</Card.Title>
                                   <Card.Text>
                                        {events.length}
                                   </Card.Text>
                              </Card.Body>
                         </Card>
                         <Card>
                              <Card.Body>
                                   <Card.Title>Total Income</Card.Title>
                                   <Card.Text>
                                        INR {total_Income}{' '}
                                   </Card.Text>
                              </Card.Body>
                         </Card>
                         <Card>
                              <Card.Body>
                                   <Card.Title>No. of registrants</Card.Title>
                                   <Card.Text>
                                        {registrants_Count}
                                   </Card.Text>
                              </Card.Body>
                         </Card>
                    </CardDeck>
                    <Table striped bordered hover>
                         <thead>
                              <tr>
                                   <th>Title</th>
                                   <th>No. of registrants</th>
                                   <th>Revenue</th>
                              </tr>
                         </thead>
                         <tbody>

                              <NextEvents upcoming_events={events} />

                         </tbody>
                    </Table>
                    {/* <Attendance events={events} /> */}
               </Container>

          </div>
     )
}


export default Dashboard
