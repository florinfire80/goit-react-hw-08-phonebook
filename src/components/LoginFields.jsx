import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const LoginFields = () => {
  return (
    <>
      <FormControl mb="4">
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" placeholder="Enter login email" />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Enter login password"
        />
      </FormControl>
    </>
  );
};

export default LoginFields;
