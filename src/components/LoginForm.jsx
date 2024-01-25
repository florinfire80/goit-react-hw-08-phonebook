import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginFields from 'components/LoginFields';
import LoginButton from 'common/LoginButton';
import { logIn } from '../redux/auth/operations';
import { Box, Alert, AlertIcon } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email && password) {
      dispatch(logIn({ email, password }));
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
      <LoginFields />
      <LoginButton />

      {showError && (
        <Alert status="error" mt="4">
          <AlertIcon /> Please fill in both email and password fields!
        </Alert>
      )}
    </Box>
  );
};
