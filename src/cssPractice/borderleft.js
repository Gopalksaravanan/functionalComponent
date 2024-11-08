import React from "react";

const BorderLeft = () => {

    // 1. If one value is specified, it applies to all border sides.
    // 2. If two values are specified, the first value is used for the top and bottom border, 
    // while the second value is used for the right and left sides border.
    // 3. If three values are specified, the first value is used for the top border, 
    // the second value is used for the right and left border, and the third value is used for 
    // the bottom border
    // 4. If four values are specified, each value applies to the border individually in the order top, 
    // right, bottom, and left.

    return (
        <div>
            <p style={{borderStyle :"solid", borderLeftColor:"Red",marginBottom:50}}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum."
                </p>
            
                <p style={{borderStyle :"solid", borderLeftWidth:"thick"}}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum."
                </p>

            <p style={{borderLeftColor:"Red",borderLeftStyle:"dotted"}}>A dotted left border</p>
            <p style={{borderLeftColor:"Red",borderLeftStyle:"dashed"}}>A dashed left border</p>
            <p style={{borderLeftColor:"Red",borderLeftStyle:"solid"}}>A Solid left border</p>
            <p style={{borderLeftColor:"Red",borderLeftStyle:"double"}}>A double left border</p>
            <p style={{borderLeftColor:"Red",borderLeftStyle:"groove"}}>A groove left border</p>
            <p style={{borderLeftColor:"Red",borderLeftStyle:"ridge"}}>A Ridge left border</p>
            <p style={{borderLeftColor:"Red",borderLeftStyle:"inset"}}>A Inset left border</p>
            <p style={{borderLeftColor:"Red",borderLeftStyle:"outset"}}>A Outset left border</p>
        </div>
    )
}

export default BorderLeft;