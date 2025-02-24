import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome to Home Page</h2>} />
        <Route path="/about" element={<h2>Welcome to About Page</h2>} />
        <Route path="/contact" element={<h2>Welcome to Contact Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
