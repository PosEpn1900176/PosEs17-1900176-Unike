// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import Store from '../store';
import App from './app';
import { Root } from 'native-base';

const Main = () => {
  return (
    <Provider store={Store}>
      <Root>
        <App />
      </Root>
    </Provider>
  );
};

export default Main;
