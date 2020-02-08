import { createStackNavigator } from 'react-navigation-stack';
import {
  HomePage,
  ScheduleServicesPage,
  ScheduleAvailablePage,
  ProfileUserPage,
  HelpPage,
} from '../../pages';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    },
  },
  ScheduleServices: {
    screen: ScheduleServicesPage,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    },
  },
  ScheduleAvailable: {
    screen: ScheduleAvailablePage,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    },
  },
  ProfileUser: {
    screen: ProfileUserPage,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    },
  },
  Help: {
    screen: HelpPage,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
      };
    },
  },
});

export default HomeNavigator;
