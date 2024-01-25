import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { Button } from '@chakra-ui/react';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Button type="button" onClick={handleLogout} colorScheme="red">
      Logout
    </Button>
  );
};

export default LogoutButton;
