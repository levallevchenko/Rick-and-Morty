import { createReducer } from '@reduxjs/toolkit';
import { ActionType } from '../action-types';

export const initialState = {
  characters: [],
  requestedCharacters: [],
  removedCharacters: [],
  partyCharacters: [],
  partyCharacterBlocks: ['Rick', 'Morty'],
  queryName: null,
  searchValue: '',
  isBadSearch: false,
  error: null,
  errorData: null,
};

export const app = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.SET_CHARACTERS, (state, action) => {
      state.characters = action.payload;
    })
    .addCase(ActionType.SET_REQUESTED_CHARACTERS, (state, action) => {
      state.requestedCharacters = action.payload;
    })
    .addCase(ActionType.SET_REMOVED_CHARACTERS, (state, action) => {
      state.removedCharacters = action.payload;
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
    .addCase(ActionType.SET_SEARCH_VALUE, (state, action) => {
      state.searchValue = action.payload;
    })
    .addCase(ActionType.SET_BAD_SEARCH, (state, action) => {
      state.isBadSearch = action.payload;
    })
    .addCase(ActionType.SET_ERROR, (state, action) => {
      state.error = action.payload;
    })
    .addCase(ActionType.SET_ERROR_DATA, (state, action) => {
      state.errorData = action.payload;
    });
});

export type AppState = ReturnType<typeof app>;
