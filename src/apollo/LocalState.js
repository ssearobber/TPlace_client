export const defaults = {
  auth: {
    isLoggedIn: Boolean(localStorage.getItem('TPToken')) || false,
    __typename: 'Auth',
  },
};

export const resolvers = {
  Mutation: {
    signInLocal: (_, { TPToken }, { cache }) => {
      localStorage.setItem('TPToken', TPToken);
      cache.writeData({
        data: {
          auth: {
            isLoggedIn: true,
            __typename: 'Auth',
          },
        },
      });
      return null;
    },
    logoutLocal: (_, __, { cache }) => {
      localStorage.removeItem('TPToken');
      cache.writeData({
        data: {
          auth: {
            isLoggedIn: false,
            __typename: 'Auth',
          },
        },
      });
      return null;
    },
  },
};
