import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ActionType, ErrorAction, ErrorDataAction } from '../action-types';
import { Characters } from '../../types/character';
import { appearingData } from '../../types/basic';



export type AppStateTypes = {
  characters: Characters,
  requestedCharacters: Characters,
  removedCharacters: Characters,
  partyCharacters: Characters,
  partyCharacterBlocks: string[],
  queryName: appearingData<string>,
  searchValue: string,
  isBadSearch: boolean,
  error: appearingData<string>,
  errorData: appearingData<string>,
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
    .addCase(ActionType.SET_CHARACTERS, (state, action: PayloadAction<Characters>) => {
      state.characters = action.payload;
    })
    .addCase(ActionType.SET_REQUESTED_CHARACTERS, (state, action: PayloadAction<Characters>) => {
      state.requestedCharacters = action.payload;
    })
    .addCase(ActionType.SET_REMOVED_CHARACTERS, (state, action: PayloadAction<Characters>) => {
      state.removedCharacters = action.payload;
    })
    .addCase(ActionType.SET_PARTY_CHARACTERS, (state, action: PayloadAction<Characters>) => {
      state.partyCharacters = action.payload;
    })
    .addCase(ActionType.SET_PARTY_CHARACTER_BLOCKS, (state, action: PayloadAction<string[]>) => {
      state.partyCharacterBlocks = action.payload;
    })
    .addCase(ActionType.SET_QUERY_NAME, (state, action: PayloadAction<appearingData<string>>) => {
      state.queryName = action.payload;
    })
    .addCase(ActionType.SET_SEARCH_VALUE, (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    })
    .addCase(ActionType.SET_BAD_SEARCH, (state, action: PayloadAction<boolean>) => {
      state.isBadSearch = action.payload;
    })
    .addCase(ActionType.SET_ERROR, (state, action: PayloadAction<appearingData<string>>) => {
      state.error = action.payload;
    })
    .addCase(ActionType.SET_ERROR_DATA, (state, action: PayloadAction<appearingData<string>>) => {
      state.errorData = action.payload;
    })
    // TODO: ?? never
    .addDefaultCase(() => {});
});

export type AppState = ReturnType<typeof app>;
