import { createSwitchNavigator } from 'react-navigation';
import {
  SignupContactData,
  SignupCategories,
  SignupProfessional,
  SignupLocalization,
  SignupSurvey,
  SignupAuth,
} from '../../pages';

const SignupNavigator = createSwitchNavigator({
  SignupContactData: {
    screen: SignupContactData,
    navigationOptions: {
      header: null,
    },
  },
  SignupProfessional: {
    screen: SignupProfessional,
    navigationOptions: {
      header: null,
    },
  },
  SignupCategories: {
    screen: SignupCategories,
    navigationOptions: {
      header: null,
    },
  },
  SignupLocalization: {
    screen: SignupLocalization,
    navigationOptions: {
      header: null,
    },
  },
  SignupSurvey: {
    screen: SignupSurvey,
    navigationOptions: {
      header: null,
    },
  },
  SignupAuth: {
    screen: SignupAuth,
    navigationOptions: {
      header: null
    },
  },
});

export default SignupNavigator;
