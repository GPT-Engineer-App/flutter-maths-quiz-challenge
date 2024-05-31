import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <Box bg="teal.500" px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>
        <Link to="/">
          <Button colorScheme="teal" variant="ghost">
            Home
          </Button>
        </Link>
        <Link to="/quizzes">
          <Button colorScheme="teal" variant="ghost">
            Quizzes
          </Button>
        </Link>
      </Box>
    </Flex>
  </Box>
);

export default Navigation;
