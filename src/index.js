import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './useState/Counter';
import UseEffect from './useEffect/useEfect';
import UseRef from './useRef/useRef';
import UseReducer from './useReducer/useReducer';
import UseContext from './useContext/useContext';



ReactDOM.render(
  <React.StrictMode>
   {/* <Counter /> */}
   {/* <UseEffect /> */}
   {/* <UseRef /> */}
   {/* <UseReducer/> */}
   <UseContext/>
  </React.StrictMode>,
  document.getElementById('root')
);