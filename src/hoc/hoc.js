import React, { useState, useEffect } from "react";

const Hoc = (OriginalComponent) => {
  return function (props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers([
        { id: 1, name: "Thomas", city: "Chennai" },
        { id: 2, name: "Ramesh", city: "Chennai" },
        { id: 3, name: "Sekar", city: "Madurai" },
        { id: 4, name: "Raghul", city: "Bangalore" },
      ]);
    }, []);

    return <OriginalComponent users={users} {...props} />;
  };
};

export default Hoc;
