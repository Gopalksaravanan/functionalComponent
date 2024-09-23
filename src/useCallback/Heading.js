import React,{memo} from "react";

const Heading = () => {

    console.log("Heading Component Rendered");

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>UseCallback Example</h1>
        </div>
    )
}

export default memo(Heading);