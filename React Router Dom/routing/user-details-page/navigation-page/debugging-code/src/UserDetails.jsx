import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function UserDetails() {
  const { id } = useParams();
  const user = users.find((u) => u.id.toString() === id);

  return (
    <Box>
      {user ? (
        <>
          <Heading>User Details</Heading>
          <Text mt={2}>Name: {user.name}</Text>
          <Text>ID: {user.id}</Text>
        </>
      ) : (
        <Heading color="red.500">User not found</Heading>
      )}
    </Box>
  );
}

export default UserDetails;
