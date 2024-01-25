import React from 'react';
import { Button } from '@chakra-ui/react';

const EditButton = ({ onClick }) => {
  return (
    <Button colorScheme="blue" onClick={onClick}>
      Edit
    </Button>
  );
};

export default EditButton;
