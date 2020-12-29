import React from 'react';
import ReactDOM from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { RendererProvider } from 'react-fela'
import createRenderer from 'styles/createRenderer'
// import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';

const cache = new InMemoryCache();
const link = new HttpLink({
  // uri: 'http://localhost:4000/.netlify/functions/graphql'
  uri: '/.netlify/functions/graphql'
})

const client = new ApolloClient({
  cache,
  link
})

const renderer = createRenderer()

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RendererProvider renderer={renderer}>
        <App />
      </RendererProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
