import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './useState/Counter';
import UseEffect from './useEffect/useEfect';
import UseRef from './useRef/useRef';
import UseReducer from './useReducer/useReducer';
import UseContext from './useContext/useContext';
import UseCallback from './useCallback/UseCallback';
import FirstComponent from './hoc/firstComponent';
import SecondComponent from './hoc/secondComponent';
import BackfaceVisibility from './cssPractice/backfaceVisbility';
import BackgroundAttachment from './cssPractice/backgroundAttachment';
import BorderCollapse from './cssPractice/borderCollapse';
import BorderColor from './cssPractice/borderColour';
import BorderLeft from './cssPractice/borderleft';



ReactDOM.render(
  <React.StrictMode>
   {/* <Counter /> */}
   {/* <UseEffect /> */}
   {/* <UseRef /> */}
   {/* <UseReducer/> */}
   {/* <UseContext/> */}
   {/* <UseCallback /> */}
   {/* <FirstComponent />
   <SecondComponent /> */}
   {/* <BackfaceVisibility /> */}
   {/* <BackgroundAttachment /> */}
   {/* <BorderCollapse /> */}
   {/* <BorderColor /> */}
    <BorderLeft />
  </React.StrictMode>,
  document.getElementById('root')
);