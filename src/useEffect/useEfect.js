import React, { useState, useEffect } from "react";

const UseEffect = () => {
    //we use useState hook to create variable count and initialized as 0.
    // setCount is the function which allows to update the value of count.
    const [count, setCount] = useState(0);

    //Another state variable msg and initialized as Initial Message.
    //setMsg is the function used to update the value of msg.
    const [msg, setMsg] = useState("Initial Message");

    //resetCount is the function used to reset the value of count to 0.
    const resetCount = () => {
        setCount(0); // It simply calls setCount(0) to reset.
    };

    // we use useEffect hook. This hook contains the side-effect logic that runs every render or 
    //when specific dependencies change.
    useEffect(() => {
        console.log("Component Mounted / Updated");
        console.log(msg);
        console.log("Count is increaed to", count);
    }, [count, msg]) //This array defines dependencies for the effect.


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button onClick={() => setCount(count + 1)} style={{ marginBottom: "10px" }}>Increase Counter</button>
            <button onClick={resetCount} style={{ marginBottom: "10px" }}>Reset Counter</button>
            <h1 style={{}}>Current value is {count}</h1>
            <button onClick={() => setMsg("Msg Updated")} style={{ marginBottom: "10px" }}>Update Msg</button>
        </div>
    )
}

export default UseEffect;