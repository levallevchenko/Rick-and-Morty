import { ActionType } from '../store/action-types';
import {
  CharactersAction,
  QueryNameAction,
  SearchValueAction,
  BadSearchAction,
  ErrorAction,
  ErrorDataAction
} from '../store/action-types';

export const ActionCreator = {
  setCharacters: (characters: CharactersAction) => ({
    type: typeof ActionType.SET_CHARACTERS,
    payload: characters,
  }),
  setRequestedCharacters: (requestedCharacters: CharactersAction) => ({
    type: ActionType.SET_REQUESTED_CHARACTERS,
    payload: requestedCharacters,
  }),
  setRemovedCharacters: (removedCharacters: CharactersAction) => ({
    type: ActionType.SET_REMOVED_CHARACTERS,
    payload: removedCharacters,
  }),
  setPartyCharacters: (partyCharacters: CharactersAction) => ({
    type: ActionType.SET_PARTY_CHARACTERS,
    payload: partyCharacters,
  }),
  setPartyCharacterBlocks: (partyCharacterBlocks) => ({
    type: ActionType.SET_PARTY_CHARACTER_BLOCKS,
    payload: partyCharacterBlocks,
  }),
  setQueryName: (queryName: QueryNameAction) => ({
    type: ActionType.SET_QUERY_NAME,
    payload: queryName,
  }),
  setSearchValue: (searchValue: SearchValueAction) => ({
    type: ActionType.SET_SEARCH_VALUE,
    payload: searchValue,
  }),
  setBadSearch: (isBadSearch: BadSearchAction) => ({
    type: ActionType.SET_BAD_SEARCH,
    payload: isBadSearch,
  }),
  setError: (error: ErrorAction) => ({
    type: ActionType.SET_ERROR,
    payload: error,
  }),
  setErrorData: (errorData: ErrorDataAction) => ({
    type: ActionType.SET_ERROR_DATA,
    payload: errorData,
  }),
};
