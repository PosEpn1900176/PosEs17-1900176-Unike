import { createStackNavigator } from 'react-navigation-stack';
import { InitialPage } from '../../pages';

const InitialNavigator = createStackNavigator(
  {
    Initial: {
      screen: InitialPage,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Initial',
  },
);

export default InitialNavigator;
