export const ActionType = {
  SET_CHARACTERS: 'app/setCharacters',
  SET_PARTY_CHARACTERS: 'app/setPartyCharacters',
  SET_PARTY_CHARACTER_BLOCKS: 'app/setPartyCharacterBlocks',
  SET_QUERY_NAME: 'app/setQueryName',
  SET_ERROR: 'app/setError',
  SET_ERROR_DATA: 'app/setErrorData',
};

export const ActionCreator = {
  setCharacters: (characters) => ({
    type: ActionType.SET_CHARACTERS,
    payload: characters,
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
  setError: (isError) => ({
    type: ActionType.SET_ERROR,
    payload: isError,
  }),
  setErrorData: (errorData) => ({
    type: ActionType.SET_ERROR_DATA,
    payload: errorData,
  }),
};
