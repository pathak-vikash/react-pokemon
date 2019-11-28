import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'

import { ApolloClient } from 'apollo-client';
import {InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://graphql-pokemon.now.sh/'
})

const client = new ApolloClient({
    cache,
    link
})


ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));

serviceWorker.unregister();