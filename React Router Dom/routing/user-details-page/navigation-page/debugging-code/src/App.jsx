import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Flex bg="gray.100" p={4} gap={4}>
        <Link to="/users">Users</Link>
      </Flex>

      {/* Routes */}
      <Box p={4}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
