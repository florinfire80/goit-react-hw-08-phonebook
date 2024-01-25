import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const ContactForm = ({ name, setName, number, setNumber }) => {
  return (
    <>
      <FormControl mb="4">
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Phone Number:</FormLabel>
        <Input
          type="text"
          name="phoneNumber"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </FormControl>
    </>
  );
};

export default ContactForm;
