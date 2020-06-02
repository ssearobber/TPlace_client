import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from './apollo/Client';
import { ApolloProvider } from 'react-apollo';
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
    <ToastContainer autoClose={6000} draggable position={'bottom-center'} />
  </ApolloProvider>,
  document.getElementById('root'),
);
