import ApolloClient from 'apollo-boost';
import { defaults, resolvers } from './LocalState';

export default new ApolloClient({
  uri: 'http://localhost:4000',

  fetchOptions: {
    credentials: 'include',
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log(`네트워크 에러입니다 : ${networkError}`);
    }
  },
  request: async (operation) => {
    const token = await localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? token : '',
      },
    });
  },

  clientState: {
    defaults,
    resolvers,
  },
});
