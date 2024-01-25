import { Box, Heading } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box
      minHeight="calc(100vh - 50px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Heading fontWeight="500" fontSize="48" textAlign="center">
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Heading>
    </Box>
  );
};

export default HomePage;
