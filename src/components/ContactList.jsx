import { useSelector, useDispatch } from 'react-redux';
import { Contact } from './Contact';
import { patchContact } from '../redux/contacts/operations';
import { selectAllContacts } from '../redux/contacts/selectors';
import { Box, UnorderedList, ListItem } from '@chakra-ui/react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSaveContact = async ({ id, name, number }) => {
    try {
      await dispatch(patchContact({ id, name, number }));
    } catch (error) {
      console.error('Saving contact error:', error);
    }
  };

  return (
    <Box>
      <UnorderedList listStyleType="none" p="0">
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id} mb="4">
            <Contact
              id={id}
              name={name}
              number={number}
              onSave={handleSaveContact}
            />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
