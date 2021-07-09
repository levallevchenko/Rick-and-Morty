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

export const ActionCreator = {
  setCharacters: (characters) => ({
    type: ActionType.SET_CHARACTERS,
    payload: characters,
  }),
  setRequestedCharacters: (requestedCharacters) => ({
    type: ActionType.SET_REQUESTED_CHARACTERS,
    payload: requestedCharacters,
  }),
  setRemovedCharacters: (removedCharacters) => ({
    type: ActionType.SET_REMOVED_CHARACTERS,
    payload: removedCharacters,
  }),
  setPartyCharacters: (partyCharacters) => ({
    type: ActionType.SET_PARTY_CHARACTERS,
    payload: partyCharacters,
  }),
  setPartyCharacterBlocks: (partyCharacterBlocks) => ({
    type: ActionType.SET_PARTY_CHARACTER_BLOCKS,
    payload: partyCharacterBlocks,
  }),
  setQueryName: (queryName) => ({
    type: ActionType.SET_QUERY_NAME,
    payload: queryName,
  }),
  setSearchValue: (searchValue) => ({
    type: ActionType.SET_SEARCH_VALUE,
    payload: searchValue,
  }),
  setBadSearch: (isBadSearch) => ({
    type: ActionType.SET_BAD_SEARCH,
    payload: isBadSearch,
  }),
  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error,
  }),
  setErrorData: (errorData) => ({
    type: ActionType.SET_ERROR_DATA,
    payload: errorData,
  }),
};
