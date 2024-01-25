import React, { useState } from 'react';
import AddContactButton from '../common/AddContactButton';
import ContactForm from 'components/ContactForm';
import { Box } from '@chakra-ui/react';

export const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      as="form"
      p="4"
      mt="4"
      borderWidth="1px"
      borderRadius="md"
      onSubmit={handleReset}
    >
      <ContactForm
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
      />
      <AddContactButton name={name} number={number} onReset={handleReset} />
    </Box>
  );
};
