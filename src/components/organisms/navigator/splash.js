import { createStackNavigator } from 'react-navigation-stack';
import { SplashPage } from '../../pages';

const SplashNavigator = createStackNavigator(
  {
    splash: {
      screen: SplashPage,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'splash',
  },
);

export default SplashNavigator;
