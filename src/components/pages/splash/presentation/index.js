import React from 'react';
import { splash } from '../../../../images';
import { View, Image } from 'react-native';

const SplashPresentation = props => {
  return (
    <View>
      <Image source={splash} style={props.dimension} />
    </View>
  );
};

export default SplashPresentation;
