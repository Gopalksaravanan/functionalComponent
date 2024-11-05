import React, { useState } from "react";

const BackgroundAttachment = () => {
    
    return (
        <div style={{
            height:"1500px",
            width:"1500px",
            backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZlaUXIWozu3xqknYB3S9nknCPGFPAEVZLA&s')",
            backgroundAttachment:"local",
           
        }}>
        Content that scrolls with the background.
    </div>
    );
}

export default BackgroundAttachment;
