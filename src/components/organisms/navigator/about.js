import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Navigation } from '../navigation';
import { AboutPage } from '../../pages/about';

const AboutNavigator = createStackNavigator({
  Sobre: {
    screen: AboutPage,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Test Home',
        headerLeft: <Navigation navigationProps={navigation} />,
      };
    },
  },
});

export default AboutNavigator;
