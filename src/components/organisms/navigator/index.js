import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './auth';
import InitialNavigator from './initial';
import SplashNavigator from './splash';
import SignupNavigator from './signup';
import AppNavigator from './app';

const Navigator = createSwitchNavigator(
  {
    Splash: SplashNavigator,
    Initial: InitialNavigator,
    App: AppNavigator,
    Auth: AuthNavigator,
    SignUp: SignupNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);

export default Navigator;
