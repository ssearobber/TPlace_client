import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//커스터마이징 컴포넌트
import GetPosts from './page/Post/GetPosts';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path={'/'} exact component={GetPosts} />
            <Redirect from={'*'} to={'/'} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
