// Core
import ApolloClient from 'apollo-boost';

// GraphQL Server
const uri = 'https://rickandmortyapi.com/graphql';

export const client = new ApolloClient({
  uri
});
