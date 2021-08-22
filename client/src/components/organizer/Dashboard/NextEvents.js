import React from "react"
const NextEvents = (props) => {
         
          return props.upcoming_events.map((event) =>
               <tr>
                                   <td>{event.title}</td>
                                   <td>{event.registration_count.toString()}</td>
                                   <td>{event.registration_count*event.entry_fee}</td>  
               </tr>
          )
}

export default NextEvents
