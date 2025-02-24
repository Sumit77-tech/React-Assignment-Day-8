import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Box, Flex, Link, useMediaQuery } from "@chakra-ui/react";

const Home = () => <h2>Welcome to Home Page</h2>;
const About = () => <h2>Welcome to About Page</h2>;
const Contact = () => <h2>Welcome to Contact Page</h2>;
const Services = () => <h2>Welcome to Services Page</h2>;

const NavItem = ({ to, label }) => (
  <Link
    as={NavLink}
    to={to}
    px={4}
    py={2}
    fontWeight="bold"
    _hover={{ color: "blue.500" }}
    _activeLink={{ color: "blue.600", borderBottom: "2px solid blue" }}
  >
    {label}
  </Link>
);

const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Flex
      as="nav"
      bg="gray.100"
      p={4}
      direction={isMobile ? "column" : "row"}
      align={isMobile ? "flex-start" : "center"}
      gap={isMobile ? 2 : 4}
    >
      <NavItem to="/" label="Home" />
      <NavItem to="/about" label="About" />
      <NavItem to="/contact" label="Contact" />
      <NavItem to="/services" label="Services" />
    </Flex>
  );
};

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Box p={4}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
