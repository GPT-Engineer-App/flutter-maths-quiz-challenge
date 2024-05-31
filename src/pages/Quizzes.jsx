import React from "react";
import { Container, VStack, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const quizzes = [
  { id: 1, name: "Math Quiz" },
  { id: 2, name: "Science Quiz" },
  { id: 3, name: "History Quiz" },
];

const Quizzes = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading>Select a Quiz</Heading>
        {quizzes.map((quiz) => (
          <Button key={quiz.id} colorScheme="teal" onClick={() => navigate(`/quiz/${quiz.id}`)}>
            {quiz.name}
          </Button>
        ))}
      </VStack>
    </Container>
  );
};

export default Quizzes;
