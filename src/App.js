import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//커스터마이징 컴포넌트
import GetPosts from './page/post/GetPosts';
import GetPostById from './page/post/GetPostById';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Switch>
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
