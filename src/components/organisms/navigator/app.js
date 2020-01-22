import { createDrawerNavigator } from 'react-navigation-drawer';
import AboutNavigator from './about';
import HomeNavigator from './home';
import { SignupContactData } from '../../pages';

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      drawerLabel: 'Atendimentos Pendentes',
    },
  },
  Signup: {
    screen: SignupContactData,
    navigationOptions: {
      drawerLabel: 'Cadastrar profissional',
    },
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      drawerLabel: 'Sobre',
    },
  },
});

export default AppNavigator;
