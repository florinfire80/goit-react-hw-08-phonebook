import React from 'react';
import LogoutButton from '../common/LogoutButton';
import { useAuth } from '../hooks/useAuth';
import { Box, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center">
      <Text fontSize="md" mr="4">
        Welcome, {user.name}
      </Text>
      <LogoutButton />
    </Box>
  );
};
