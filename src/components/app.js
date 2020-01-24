// @flow
import * as React from 'react';
import { Routes } from './organisms';
import { StyleProvider } from 'native-base';
import theme from '../themes';

const App = () => (
  <StyleProvider style={theme}>
    <Routes />
  </StyleProvider>
);

export default App;
