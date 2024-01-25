import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const RegisterFields = () => {
  return (
    <>
      <FormControl mb="4">
        <FormLabel>Username</FormLabel>
        <Input type="text" name="name" placeholder="Enter your name" />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" placeholder="Enter email address" />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" placeholder="Enter password" />
      </FormControl>
    </>
  );
};

export default RegisterFields;
