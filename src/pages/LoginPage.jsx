import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm';
import { Box, Container } from '@chakra-ui/react';

export default function Login() {
  return (
    <Container maxW="md" mt="8">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box p="8" borderWidth="1px" borderRadius="md" boxShadow="md">
        <LoginForm />
      </Box>
    </Container>
  );
}
