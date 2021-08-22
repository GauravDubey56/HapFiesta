import React, { Component } from 'react'

const SelectEvents = (props) => {
          return props.events.map((event) =>
               <option>
                    {event.title}
               </option>
          )
     }


export default SelectEvents
