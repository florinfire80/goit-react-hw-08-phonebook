import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex>
      <Link
        as={NavLink}
        to="/register"
        p="2"
        m="2"
        color="white"
        _hover={{ textDecoration: 'underline' }}
      >
        Register
      </Link>
      <Link
        as={NavLink}
        to="/login"
        p="2"
        m="2"
        color="white"
        _hover={{ textDecoration: 'underline' }}
      >
        Log In
      </Link>
    </Flex>
  );
};
