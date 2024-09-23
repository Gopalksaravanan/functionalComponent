import React, { useState, useEffect } from "react";
import Hoc from "./hoc";

const SecondComponent = ({users}) => {
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
    <h1>Second Component</h1>
      {users.map((item) => (
        <div key={item.id}>{item.city}</div>
      ))}
    </>
  );
};

export default Hoc(SecondComponent);
