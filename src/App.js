import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from './SharedQueries.local';

//커스터마이징 컴포넌트
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home from './page/Home';
import GetPosts from './page/Post/GetPosts';
import GetPostById from './page/Post/GetPostById';
import PostForm from './page/Post/PostForm';
import SignIn from './page/auth/SignIn';
import SignUp from './page/auth/SignUp';

const App = () => {
  const {
    data: {
      auth: { isLoggedIn },
    },
    loading,
    error,
  } = useQuery(IS_LOGGED_IN);

  if (loading) return <div>loading..</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Header isLoggedIn={isLoggedIn} />
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/signUp'} exact component={SignUp} />
            <Route path={'/signIn'} exact component={SignIn} />
            <Route path={'/posts'} exact>
              <GetPosts isLoggedIn={isLoggedIn} />
            </Route>
            <Route path={'/post/create'} exact component={PostForm} />
            <Route path={'/post/:postId'} exact component={GetPostById} />
            <Route path={'/post/:postId'} exact>
              <GetPostById isLoggedIn={isLoggedIn} />
            </Route>
            <Route path={'/post/:postId/update'} exact component={PostForm} />
            <Redirect from={'*'} to={'/'} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
