import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import Main from './pages/Main/index';

//Fragment as it was a <div> without any configuration.
const App = () => (
  <Fragment>
  <GlobalStyle />
  <Main />
  </Fragment>
)

export default App;
