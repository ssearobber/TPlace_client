import ApolloClient from 'apollo-boost';
import { defaults, resolvers } from './LocalState';

export default new ApolloClient({
  uri: 'http://localhost:4000',
  // uri: 'https://tplace.herokuapp.com/',

  fetchOptions: {
    credentials: 'include',
  },
  request: async (operation) => {
    const TPToken = await localStorage.getItem('TPToken');
    operation.setContext({
      headers: {
        authorization: TPToken ? TPToken : '',
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
