import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import Route from './routes';

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Route />
    </AppProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
