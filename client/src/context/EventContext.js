import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  events: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
   async function getEvents() {
    try {
      const res = await axios.get('/api/v1/events');

      dispatch({
        type: 'GET_EVENTS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'EVENT_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteEvent(id) {
    try {
      await axios.delete(`/api/v1/events/${id}`);
      
      dispatch({
        type: 'DELETE_EVENT',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'EVENT_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addEvent(event) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/events',event, config);
      console.log(event);
      dispatch({
        type: 'ADD_EVENT',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'EVENT_ERROR',
        payload: err.response.data.error
      });
    }
  }
  // async function registration(eventId, userId){
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   try {
  //     const res = await axios.put('/api/v1/events/eventId',event, config);
      
  //     dispatch({
  //       type: 'ADD_EVENT',
  //       payload: res.data.data
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: 'EVENT_ERROR',
  //       payload: err.response.data.error
  //     });
  //   }

  // }

  return (<GlobalContext.Provider value={{
    events: state.events,
    error: state.error,
    loading: state.loading,
    getEvents,
    deleteEvent,
    addEvent
  }}>
    {children}
  </GlobalContext.Provider>);
}