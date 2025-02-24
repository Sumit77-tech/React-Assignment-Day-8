import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const Users = () => {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const UserDetails = () => {
  const { userId } = useParams();
  const user = users.find((u) => u.id.toString() === userId);

  return (
    <div>
      {user ? <h2>Details of {user.name}</h2> : <h2>User not found</h2>}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/users" style={{ margin: "0 1rem" }}>Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome to Home Page</h2>} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
