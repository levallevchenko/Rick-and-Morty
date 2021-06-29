import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

export const initialState = {
  characters: [],
  partyCharacters: [],
  partyCharacterBlocks: ['Rick', 'Morty'],
  queryName: null,
  isError: null,
  errorData: null,
};

const app = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.SET_CHARACTERS, (state, action) => {
      state.characters = action.payload;
    })
    .addCase(ActionType.SET_PARTY_CHARACTERS, (state, action) => {
      state.partyCharacters = action.payload;
    })
    .addCase(ActionType.SET_PARTY_CHARACTER_BLOCKS, (state, action) => {
      state.partyCharacterBlocks = action.payload;
    })
    .addCase(ActionType.SET_QUERY_NAME, (state, action) => {
      state.queryName = action.payload;
    })
    .addCase(ActionType.SET_ERROR, (state, action) => {
      state.isError = action.payload;
    })
    .addCase(ActionType.SET_ERROR_DATA, (state, action) => {
      state.errorData = action.payload;
    });
});

export default app;
