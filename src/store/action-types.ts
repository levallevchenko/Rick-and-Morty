import { ICharacter, Characters } from "../types/character";

export const ActionType = {
  SET_CHARACTERS: 'app/setCharacters',
  SET_REQUESTED_CHARACTERS: 'app/setRequestedCharacters',
  SET_REMOVED_CHARACTERS: 'app/setRemovedCharacters',
  SET_PARTY_CHARACTERS: 'app/setPartyCharacters',
  SET_PARTY_CHARACTER_BLOCKS: 'app/setPartyCharacterBlocks',
  SET_QUERY_NAME: 'app/setQueryName',
  SET_SEARCH_VALUE: 'app/setSearchValue',
  SET_BAD_SEARCH: 'app/setBadSearch',
  SET_ERROR: 'app/setError',
  SET_ERROR_DATA: 'app/setErrorData',
};

export type CharactersAction = {
  type: typeof ActionType.SET_CHARACTERS;
  payload: Characters;
};

export type QueryNameAction = {
  type: typeof ActionType.SET_QUERY_NAME;
  payload: string;
};

export type SearchValueAction = {
  type: typeof ActionType.SET_SEARCH_VALUE;
  payload: string;
};

export type BadSearchAction = {
  type: typeof ActionType.SET_BAD_SEARCH;
  payload: boolean;
};

export type ErrorAction = {
  type: typeof ActionType.SET_ERROR;
  payload: string;
};

export type ErrorDataAction = {
  type: typeof ActionType.SET_ERROR_DATA;
  payload: string;
};

export type appActionTypes =
  | CharactersAction
  | QueryNameAction
  | SearchValueAction
  | BadSearchAction
  | ErrorAction
  // | ErrorDataAction
