import React,{useEffect, useRef} from "react";

//The useRef hook in React is primarily used for accessing and interacting with DOM elements 
//or for storing mutable values that persist across renders without causing re-renders. 
//It returns a mutable object with a .current property, which holds the value you want to persist.
const UseRef = ()=>{

    //Here, useRef(null) is called, creating a reference called initializeRef. Initially, it's set to null.
    const initializeRef = useRef(null);

    //This is an array of hex color codes. These colors will be used later to change the color
    const colors = ['#ff5722','#ffc107','#d529d0']

    useEffect(()=>{
        console.log(initializeRef); //logs the current state of initializeRef to the console.
    })

    //This function will be called when the button is clicked. 
    //It changes the text color of the <p> element.
    const colourChange = ()=>{
       // This line generates a random index between 0 and colors.length - 1 (inclusive).
         const randomColor = Math.floor(Math.random() * colors.length);
         // 1. initializeRef.current gives access to the actual DOM element of the <p> tag.
         // 2. initializeRef.current.style.color changes the inline CSS color property of the 
         //<p> element to a randomly selected color from the colors array.
         initializeRef.current.style.color = colors[randomColor];
    }

    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button onClick={()=>{colourChange()}}>Click here!</button>
        <p ref={initializeRef}>This is UseRef Hook Example!!</p>
        </div>
    )
}

export default UseRef;