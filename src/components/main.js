// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import Store from '../store'
import App from './app'

const Main = () => {
    return (
        <Provider store={Store}>
            <App />
        </Provider>
    );
}

export default Main;
