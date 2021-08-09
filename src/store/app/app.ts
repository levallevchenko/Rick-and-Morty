import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ActionType, ErrorAction, ErrorDataAction } from '../action-types';
import { ICharacter } from '../../types/character';

export type AppStateTypes = {
  characters: ICharacter[],
  requestedCharacters:  ICharacter[],
  removedCharacters: ICharacter[],
  partyCharacters: ICharacter[],
  partyCharacterBlocks: string[],
  queryName: null | string,
  searchValue: string,
  isBadSearch: boolean,
  error: null | ErrorAction,
  errorData: null | ErrorDataAction,
}

export const initialState: AppStateTypes = {
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

export const app = createReducer(initialState, (builder): void => {
  builder
    .addCase(ActionType.SET_CHARACTERS, (state, action: PayloadAction<ICharacter[]>) => {
      state.characters = action.payload;
    })
    .addCase(ActionType.SET_REQUESTED_CHARACTERS, (state, action: PayloadAction<ICharacter[]>) => {
      state.requestedCharacters = action.payload;
    })
    .addCase(ActionType.SET_REMOVED_CHARACTERS, (state, action: PayloadAction<ICharacter[]>) => {
      state.removedCharacters = action.payload;
    })
    .addCase(ActionType.SET_PARTY_CHARACTERS, (state, action: PayloadAction<ICharacter[]>) => {
      state.partyCharacters = action.payload;
    })
    .addCase(ActionType.SET_PARTY_CHARACTER_BLOCKS, (state, action: PayloadAction<string[]>) => {
      state.partyCharacterBlocks = action.payload;
    })
    .addCase(ActionType.SET_QUERY_NAME, (state, action: PayloadAction<string>) => {
      state.queryName = action.payload;
    })
    .addCase(ActionType.SET_SEARCH_VALUE, (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    })
    .addCase(ActionType.SET_BAD_SEARCH, (state, action: PayloadAction<boolean>) => {
      state.isBadSearch = action.payload;
    })
    .addCase(ActionType.SET_ERROR, (state, action: PayloadAction<ErrorAction>) => {
      state.error = action.payload;
    })
    .addCase(ActionType.SET_ERROR_DATA, (state, action: PayloadAction<ErrorDataAction>) => {
      state.errorData = action.payload;
    });
});

export type AppState = ReturnType<typeof app>;
