import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RegisterFields from './RegisterFields';
import RegisterButton from 'common/RegisterButton';
import { register } from '../redux/auth/operations';
import { Box, Alert, AlertIcon } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (name && email && password) {
      dispatch(register({ name, email, password }));
      form.reset();
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      p="4"
      borderWidth="1px"
      borderRadius="md"
    >
      <RegisterFields />
      <RegisterButton />

      {showError && (
        <Alert status="error" mt="4">
          <AlertIcon />
          Please fill in all fields!
        </Alert>
      )}
    </Box>
  );
};
