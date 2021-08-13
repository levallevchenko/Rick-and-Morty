// Core
import ApolloClient from 'apollo-boost';

// GraphQL Server
const uri = 'https://rickandmortyapi.com/graphql';

// type?
export const client: any = new ApolloClient({
  uri,
});
