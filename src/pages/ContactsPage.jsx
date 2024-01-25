import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList';
import { ContactEditor } from 'components/ContactEditor';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/selectors';
import { Box, Text, Spinner } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactEditor />
      {isLoading ? (
        <Box textAlign="center" mt="4">
          <Spinner size="lg" color="teal.500" />
          <Text mt="2">Request in progress...</Text>
        </Box>
      ) : (
        <ContactList />
      )}
    </>
  );
}
