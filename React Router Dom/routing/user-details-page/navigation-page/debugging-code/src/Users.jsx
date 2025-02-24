import { Link } from "react-router-dom";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

function Users() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <Box>
      <Heading mb={4}>Users Page</Heading>
      <List spacing={3}>
        {users.map((user) => (
          <ListItem key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Users;
