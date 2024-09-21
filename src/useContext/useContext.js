import React, { useContext, useState, createContext } from 'react';

// 1. This creates a new context object called UserContext.
const UserContext = createContext();

const UseContext = ()=> {
  // 2. This line creates state to be shared across components
  const [user, setUser] = useState('Gopal');

  return (
    // 3. Wrap components in the UserContext.Provider
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>Welcome to the App!</h1>
        <UserInfo />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  );
}

const UserInfo = ()=> {
  // 4. Consume the context using useContext
  const { user } = useContext(UserContext);

  return <h2>User: {user}</h2>;
}

const ChangeUser = ()=> {
  // 5. Consume the context to change the user
  const { setUser } = useContext(UserContext);

  return <button onClick={() => setUser('GK')}>Change User</button>;
}

export default UseContext;
