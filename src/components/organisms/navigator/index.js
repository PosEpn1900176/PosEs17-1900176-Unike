import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './auth';
import InitialNavigator from './initial';
import SignupNavigator from './signup';
import AppNavigator from './app';
import { LoadingPage } from '../../pages';

const Navigator = createSwitchNavigator(
  {
    Initial: InitialNavigator,
    App: AppNavigator,
    Auth: AuthNavigator,
    SignUp: SignupNavigator,
  },
  {
    initialRouteName: 'Initial',
  },
);

export default Navigator;
