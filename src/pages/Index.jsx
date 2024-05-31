import React, { useState } from "react";
import { Container, VStack, Text, Button, Box, Radio, RadioGroup, Stack, Heading } from "@chakra-ui/react";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

const questions = [
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "10", "15"],
    answer: "8",
  },
  {
    question: "What is 10 - 6?",
    options: ["4", "5", "6", "7"],
    answer: "4",
  },
  {
    question: "What is 7 * 2?",
    options: ["12", "14", "16", "18"],
    answer: "14",
  },
  {
    question: "What is 9 / 3?",
    options: ["2", "3", "4", "5"],
    answer: "3",
  },
];

const Home = ({ startQuiz }) => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <FaQuestionCircle size="3em" />
      <Heading>Math Quiz</Heading>
      <Text>Test your math skills with this fun quiz!</Text>
      <Button colorScheme="teal" onClick={startQuiz}>
        Start Quiz
      </Button>
    </VStack>
  </Container>
);

const Quiz = ({ questions, submitQuiz }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (value, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        {questions.map((q, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
            <Text mb={4}>{q.question}</Text>
            <RadioGroup onChange={(value) => handleChange(value, index)} value={answers[index]}>
              <Stack direction="column">
                {q.options.map((option, i) => (
                  <Radio key={i} value={option}>
                    {option}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={() => submitQuiz(answers)}>
          Submit Quiz
        </Button>
      </VStack>
    </Container>
  );
};

const Results = ({ score, restartQuiz }) => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <FaCheckCircle size="3em" />
      <Heading>Quiz Results</Heading>
      <Text>Your Score: {score}</Text>
      <Button colorScheme="teal" onClick={restartQuiz}>
        Restart Quiz
      </Button>
    </VStack>
  </Container>
);

const Index = () => {
  const [step, setStep] = useState("home");
  const [score, setScore] = useState(0);

  const startQuiz = () => setStep("quiz");
  const submitQuiz = (answers) => {
    const score = answers.reduce((acc, answer, index) => acc + (answer === questions[index].answer ? 1 : 0), 0);
    setScore(score);
    setStep("results");
  };
  const restartQuiz = () => {
    setScore(0);
    setStep("home");
  };

  return (
    <>
      {step === "home" && <Home startQuiz={startQuiz} />}
      {step === "quiz" && <Quiz questions={questions} submitQuiz={submitQuiz} />}
      {step === "results" && <Results score={score} restartQuiz={restartQuiz} />}
    </>
  );
};

export default Index;
