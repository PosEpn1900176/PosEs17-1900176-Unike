import { createStackNavigator } from 'react-navigation-stack';
import { LoginPage, LoadingPage } from '../../pages';
import AppNavigator from './app';

const AuthNavigator = createStackNavigator(
  {
    App: {
      screen: AppNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LoginPage,
      navigationOptions: {
        header: null,
      },
    },
    AuthLoading: {
      screen: LoadingPage,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default AuthNavigator;

// Atendimentos Pendentes
// Atendimentos realizados
// Buscar por Atendimento
// Lista de serviços recusados
// Alterar PerformanceObserverEntryList
// Sair
