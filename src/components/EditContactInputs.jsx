import React from 'react';
import { Input } from '@chakra-ui/react';

const ContactInputs = ({
  editedName,
  editedNumber,
  onNameChange,
  onNumberChange,
}) => {
  return (
    <>
      <Input value={editedName} onChange={onNameChange} />
      <Input value={editedNumber} onChange={onNumberChange} />
    </>
  );
};

export default ContactInputs;
