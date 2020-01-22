import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { getUserToken } from './user'

const LoadingPage = props => {
  const goNavigate = async () => {
    try {
      const userToken = await getUserToken();
      props.navigation.navigate(userToken ? 'App' : 'Auth');
    } catch (error) {
      console.log('Error auth')
      console.error(error);
    }
  }
  useEffect(() => {
    goNavigate();
  }, []);

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export { LoadingPage };
