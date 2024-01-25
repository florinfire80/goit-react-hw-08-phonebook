import React from 'react';
import { Button } from '@chakra-ui/react';

const SaveButton = ({ onClick }) => {
  return (
    <Button colorScheme="teal" onClick={onClick}>
      Save
    </Button>
  );
};

export default SaveButton;
