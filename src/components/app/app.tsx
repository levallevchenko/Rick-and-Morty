// Core
import React, { FC } from 'react';

// Components
import { ApolloProvider } from '@apollo/react-hooks';
import { Article } from '../article/article';

import { client } from '../../init/client';

export const App: FC = () => (
  <ApolloProvider client={client}>
    <h1>Rick & Morty</h1>
    <Article />
  </ApolloProvider>
  // <Article />
);
