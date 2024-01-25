import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Box, Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav" p="4">
      <Link
        as={NavLink}
        to="/"
        mr="4"
        color="white"
        _hover={{ textDecoration: 'underline' }}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={NavLink}
          to="/contacts"
          color="white"
          _hover={{ textDecoration: 'underline' }}
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};
