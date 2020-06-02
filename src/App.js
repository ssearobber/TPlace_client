import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from './SharedQueries.local';

//커스터마이징 컴포넌트
import Header from './components/organisms/Header';
import GetPosts from './page/post/GetPosts';
import GetPostById from './page/post/GetPostById';
import SignIn from './page/auth/SignIn';

const App = () => {
  const {
    data: {
      auth: { isLoggedIn },
    },
    loading,
    error,
  } = useQuery(IS_LOGGED_IN);

  console.log(isLoggedIn);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Header isLoggedIn={isLoggedIn} />
          <Switch>
            <Route path={'/signIn'} component={SignIn} />
            <Route path={'/posts'} exact component={GetPosts} />
            <Route path={'/post/:postId'} exact component={GetPostById} />
            <Redirect from={'*'} to={'/'} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
