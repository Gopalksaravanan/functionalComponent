import React, { useState } from "react";

const BackfaceVisibility = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div style={{ perspective: "1000px", width: "200px", height: "300px" }}>
            {/* perspective: "1000px": Adds a 3D perspective to this div. 
            Higher values flatten the perspective effect, while lower values increase the effect. */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "green",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    // transformStyle: "preserve-3d": Keeps the 3D rotations for the child elements so 
                    // that each side appears in a different 3D position during flips.
                    transition: "transform 0.6s",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" // Dynamically update transform here
                }}
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
            >
                <img src="https://image.tmdb.org/t/p/original/uTQNCqMnSDbZghFYNmzDvTVD413.jpg" style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    color: "white",
                    backgroundColor: "blue",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                }} />

                <img src="https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg" style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    color: "white",
                    backgroundColor: "red",
                    backfaceVisibility: "hidden",
                    // When an element rotates, its back side may become visible. 
                    // Setting backface-visibility: hidden prevents the content on the back side 
                    // from showing through during the rotation.
                    transform: "rotateY(0deg)"
                }} />
            </div>
        </div>
    );
}

export default BackfaceVisibility;
