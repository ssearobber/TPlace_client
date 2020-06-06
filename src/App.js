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
import PostForm from './page/post/PostForm';
import SignIn from './page/auth/SignIn';
import SignUp from './page/auth/SignUp';

const App = () => {
  console.log('원격 브랜치 test 하기');
  const {
    data: {
      auth: { isLoggedIn },
    },
    // loading,
    // error,
  } = useQuery(IS_LOGGED_IN);

  console.log(isLoggedIn);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Header isLoggedIn={isLoggedIn} />
          <Switch>
            <Route path={'/signUp'} component={SignUp} />
            <Route path={'/signIn'} component={SignIn} />
            <Route path={'/posts'} exact>
              <GetPosts isLoggedIn={isLoggedIn} />
            </Route>
            <Route path={'/post/create'} exact component={PostForm} />
            <Route path={'/post/:postId'} exact component={GetPostById} />
            <Route path={'/post/:postId/update'} exact component={PostForm} />
            <Redirect from={'*'} to={'/'} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
