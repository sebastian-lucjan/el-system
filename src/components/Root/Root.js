import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { theme } from '../../assets/styles/theme';
import GlobalStyle from '../../assets/styles/globalStyles';
import MainTemplate from '../../providers/MainTemplate';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <MainTemplate />
        </Route>
        <Route to="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
);
export default Root;
