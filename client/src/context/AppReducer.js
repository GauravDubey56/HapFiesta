const reducer =  (state, action) => {
     switch(action.type) {
       case 'GET_EVENTS':
         return {
           ...state,
           loading: false,
           events: action.payload
         }
       case 'DELETE_EVENT':
         return {
           ...state,
           events: state.events.filter(event => event._id !== action.payload)
         }
       case 'ADD_EVENT':
         return {
           ...state,
           events: [...state.events, action.payload]
         }
       case 'EVENT_ERROR':
         return {
           ...state,
           error: action.payload
         }
       default:
         return state;
     }
   }
export default reducer