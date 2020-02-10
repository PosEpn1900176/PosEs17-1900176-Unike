import { createStackNavigator } from 'react-navigation-stack';
import {
  HomePage,
  ScheduleServicesPage,
  AvailableServicesPage,
  ProfileUserPage,
  HelpPage,
  MapPage,
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
  AvailableServices: {
    screen: AvailableServicesPage,
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
  Map: {
    screen: MapPage,
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
