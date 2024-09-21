import React, { useReducer } from "react";

// This is the reducer function that will manage how the state changes based on different actions.
//state: The current state of the application.
//action: An object that tells the reducer how to update the state
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }; // Increment the count by 1
    case 'decrement':
      return { count: state.count - 1 }; // Decrement the count by 1
      case 'reset':
        return { count: action.payload }; // Use payload to reset the count
    default:
      return state; // If no action matches, return the current state
  }
}

const UseReducer = ()=> {
  // useReducer takes the reducer function and an initial state object
  //state: The current state, which will be an object with the count value.
  //dispatch: A function used to send actions to the reducer to update the state.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      {/* This function is used to "dispatch" actions to the reducer. 
      The reducer then determines how to update the state based on the action type. */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={()=> dispatch({type:'reset',payload:0})}>Reset</button>
    </div>
  );
}

export default UseReducer;
