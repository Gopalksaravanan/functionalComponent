import React, { useState, useEffect } from "react";
import Hoc from "./hoc";

const FirstComponent = ({users}) => {
  
//     const [users, setUsers] = useState([]);

//   useEffect(() => {
//     setUsers([
//       { id: 1, name: "Thomas", city: "Chennai" },
//       { id: 2, name: "Ramesh", city: "Chennai" },
//       { id: 3, name: "Sekar", city: "Madurai" },
//       { id: 4, name: "Raghul", city: "Bangalore" },
//     ]);
//   }, []);

  return (
    <>
    <h1>First Component</h1>
      {users.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};

export default Hoc(FirstComponent);
