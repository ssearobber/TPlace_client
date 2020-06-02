export const defaults = {
  auth: {
    isLoggedIn: Boolean(localStorage.getItem('token')) || false,
    __typename: 'Auth',
  },
};

export const resolvers = {
  Mutation: {
    signInLocal: (_, { token }, { cache }) => {
      localStorage.setItem('token', token);
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
      localStorage.removeItem('token');
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
