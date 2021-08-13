// Core
import React, { FC } from 'react';

// Components
import { Article } from '../article/article';

import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../../init/client';

export const App: FC = () => (
  <ApolloProvider client={client}>
    <h1>Rick & Morty</h1>
    <Article/>
  </ApolloProvider>
  // <Article />
)
