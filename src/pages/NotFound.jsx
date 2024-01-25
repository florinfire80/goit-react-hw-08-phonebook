import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Box textAlign="center" mt="8">
      <Heading fontSize="2xl">404 - Not Found</Heading>
      <Text mt="4">The page you are looking for does not exist.</Text>
    </Box>
  );
};

export default NotFound;
