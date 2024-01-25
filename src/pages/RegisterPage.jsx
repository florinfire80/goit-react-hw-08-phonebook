import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm';
import { Box, Container } from '@chakra-ui/react';

export default function Register() {
  return (
    <Container maxW="md" mt="8">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Box p="8" borderWidth="1px" borderRadius="md" boxShadow="md">
        <RegisterForm />
      </Box>
    </Container>
  );
}
