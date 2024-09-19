import React, {useState} from "react";

const Counter = ()=>{
    //useState is used for creating and managing state variables in functional components
    //Here, we use the useState hook to create a state variable named count, initialized to 0.
    //setCount is a function that will allow us to update the value of count.
    const [count, setCount] = useState(0);

    // //resetCount is the function used to reset the value of count to 0.
    const resetCount = () => {
        setCount(0);
    };

    return(
        <div style={{display:"flex",flexDirection: "column",alignItems:"center"}}>
           <button onClick={() => setCount(count + 1)} style={{ marginBottom: "10px" }}>Increase Counter</button>
            <button onClick={resetCount} style={{ marginBottom: "10px" }}>Reset Counter</button>
            <h1 style={{}}>Current value is {count}</h1>
        </div>
    )
}

export default Counter;