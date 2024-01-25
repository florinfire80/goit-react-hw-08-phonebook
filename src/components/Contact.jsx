import React, { useState } from 'react';
import DeleteButton from 'common/DeleteButton';
import EditButton from 'common/EditButton';
import SaveButton from 'common/SaveButton';
import EditContactInputs from './EditContactInputs';
import SaveConfirmationModal from './SaveConfirmationModal';
import { Box, Text } from '@chakra-ui/react';

export const Contact = ({ id, name, number, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setSaveModalOpen(true);
  };

  const handleConfirmSave = async () => {
    try {
      if (typeof onSave === 'function') {
        // Verifica daca onSave e o functie
        // Trimite datele către server
        await onSave({
          id,
          name: editedName,
          number: editedNumber,
        });
      }
      // După salvare, închide fereastra modală și revine la modul de vizualizare
      setIsEditing(false);
      setSaveModalOpen(false);
    } catch (error) {
      console.error('Saving error:', error);
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p="2"
      mt="2"
      mb="4"
      width="895px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      {isEditing ? (
        <>
          <EditContactInputs
            editedName={editedName}
            editedNumber={editedNumber}
            onNameChange={e => setEditedName(e.target.value)}
            onNumberChange={e => setEditedNumber(e.target.value)}
          />
          <SaveButton onClick={handleSaveClick} />
          <SaveConfirmationModal
            isOpen={isSaveModalOpen}
            onClose={() => setSaveModalOpen(false)}
            onConfirm={handleConfirmSave}
          />
        </>
      ) : (
        <>
          <Text fontSize="md" flex="1">{`${name} ${number}`}</Text>
          <EditButton onClick={handleEditClick} />
          <DeleteButton id={id} />
        </>
      )}
    </Box>
  );
};

export default Contact;
