import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { HomePage } from '../../pages';
import { Navigation } from '../navigation';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Test Home',
        headerLeft: <Navigation navigationProps={navigation} />,
      };
    },
    header: null,
  },
});

export default HomeNavigator;
