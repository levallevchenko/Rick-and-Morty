import { Characters } from "../types/character";
import { ActionType } from '../store/action-types';
import {
  CharactersAction,
  QueryNameAction,
  SearchValueAction,
  BadSearchAction,
  ErrorAction,
  ErrorDataAction,
  appActionTypes
} from '../store/action-types';

export const ActionCreator = {
  setCharacters: (payload: Characters) => ({
    type: ActionType.SET_CHARACTERS,
    payload,
  }),
  setRequestedCharacters: (payload: Characters) => ({
    type: ActionType.SET_REQUESTED_CHARACTERS,
    payload,
  }),
  setRemovedCharacters: (payload: Characters) => ({
    type: ActionType.SET_REMOVED_CHARACTERS,
    payload,
  }),
  setPartyCharacters: (payload: Characters) => ({
    type: ActionType.SET_PARTY_CHARACTERS,
    payload,
  }),
  setPartyCharacterBlocks: (payload: []) => ({
    type: ActionType.SET_PARTY_CHARACTER_BLOCKS,
    payload,
  }),
  setQueryName: (payload: QueryNameAction) => ({
    type: ActionType.SET_QUERY_NAME,
    payload,
  }),
  setSearchValue: (payload: SearchValueAction) => ({
    type: ActionType.SET_SEARCH_VALUE,
    payload,
  }),
  setBadSearch: (payload: boolean) => ({
    type: ActionType.SET_BAD_SEARCH,
    payload,
  }),
  setError: (payload: string) => ({
    type: ActionType.SET_ERROR,
    payload,
  }),
  setErrorData: (payload: string) => ({
    type: ActionType.SET_ERROR_DATA,
    payload,
  }),
};
