// Core
import { useLazyQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryCharacters = loader('./gql/queryCharacters.graphql');

export const useCharacters = () => {
  const [getCharacters, { loading, error, data }] = useLazyQuery(queryCharacters);

  return {
    getCharacters, loading, error, characters: data && data.characters.results,
  };
};
