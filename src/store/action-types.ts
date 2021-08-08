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
};

export type QueryNameAction = {
  type: typeof ActionType.SET_QUERY_NAME;
};

export type SearchValueAction = {
  type: typeof ActionType.SET_SEARCH_VALUE;
};

export type BadSearchAction = {
  type: typeof ActionType.SET_BAD_SEARCH;
};

export type ErrorAction = {
  type: typeof ActionType.SET_ERROR;
};

export type ErrorDataAction = {
  type: typeof ActionType.SET_ERROR_DATA;
};
