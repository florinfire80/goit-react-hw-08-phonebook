import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';
import { Button } from '@chakra-ui/react';

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Button colorScheme="red" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteButton;
