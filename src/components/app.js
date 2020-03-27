// @flow
import * as React from 'react';
import { Routes } from './organisms/route';
import { StyleProvider } from 'native-base';
import theme from '../themes';
import { useCurrentPosition } from '../hooks';

const App = () => {
  useCurrentPosition();
  return (
    <StyleProvider style={theme}>
      <Routes />
    </StyleProvider>
  );
};

export default App;
