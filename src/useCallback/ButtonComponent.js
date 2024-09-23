import React from "react";

const Button =({onIncrement,onDecrement,onReset})=>{

    console.log("Button Component Rendered");
    
    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default Button;