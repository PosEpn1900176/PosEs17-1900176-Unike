import { createDrawerNavigator } from 'react-navigation-drawer';
import AboutNavigator from './about';
import HomeNavigator from './home';
import { SignupContactData } from '../../pages';
import { createSwitchNavigator } from 'react-navigation';

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Signup: {
    screen: SignupContactData,
    // navigationOptions: {
    //   drawerLabel: 'Cadastrar profissional',
    // },
  },
  About: {
    screen: AboutNavigator,
    // navigationOptions: {
    //   drawerLabel: 'Sobre',
    // },
  },
});

export default AppNavigator;
