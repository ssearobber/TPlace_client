import ApolloClient from 'apollo-boost';
import { defaults, resolvers } from './LocalState';

export default new ApolloClient({
  uri: 'http://localhost:4000',

  fetchOptions: {
    credentials: 'include',
  },
  request: async (operation) => {
    const token = await localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? token : '',
      },
    });
  },
  onError: ({ networkError, graphQLErrors }) => {
    if (networkError) {
      console.log(`네트워크 에러입니다 : ${networkError}`);
    }
    if (graphQLErrors) {
      console.log(`graphQL 에러입니다 : ${graphQLErrors.map((error) => console.log(error))}`);
    }
  },

  clientState: {
    defaults,
    resolvers,
  },
});
