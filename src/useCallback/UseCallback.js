import React,{useCallback,useState,memo} from "react";
import Heading from "./Heading";
import Button from "./ButtonComponent";

const UseCallback =()=>{
    console.log("UseCallback component Rendered");
    

    const [count,setCount] = useState(0)
    
    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
      }, []);

      const decrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
      }, []);
    
      const reset = useCallback(() => {
        setCount(0); // Resets the counter to 0
      }, []);
    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Heading />
        <h1>Count:{count}</h1>
        <Button onIncrement ={increment} onDecrement ={decrement} onReset ={reset} />
        </div>
    )
}

export default UseCallback;