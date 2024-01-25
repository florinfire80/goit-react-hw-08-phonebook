import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts/operations';
import { Button } from '@chakra-ui/react';

const AddContactButton = ({ name, number, onReset }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (name !== '' && number !== '') {
      dispatch(addContact({ name, number }));
      onReset();
    } else {
      alert('Name and phone number are required. Enter some text!');
    }
  };

  return (
    <Button type="submit" colorScheme="teal" onClick={handleSubmit}>
      Add contact
    </Button>
  );
};

export default AddContactButton;
