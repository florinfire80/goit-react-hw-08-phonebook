import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import {
  fetchContacts,
  addContact,
  deleteContact,
  patchContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(patchContact.pending, handlePending)
      .addCase(patchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        // Preia datele actualizate din payload
        const updatedContact = action.payload;

        // Actualizează contactul în funcție de datele primite în acțiune
        const updatedContactIndex = state.items.findIndex(
          contact => contact.id === action.payload.id
        );

        // Verifică dacă contactul există în listă
        if (updatedContactIndex !== -1) {
          // Folosește spread operator pentru a evita modificarea directă a obiectului
          state.items = [
            ...state.items.slice(0, updatedContactIndex),
            updatedContact,
            ...state.items.slice(updatedContactIndex + 1),
          ];
        }
      })
      .addCase(patchContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
