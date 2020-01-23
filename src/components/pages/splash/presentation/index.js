import React from 'react';
import { presentationImage } from '../../../../images';
import { View, Image } from 'react-native';

const SplashPresentation = props => {
  return (
    <View>
      <Image source={presentationImage} style={props.dimension} />
    </View>
  );
};

export default SplashPresentation;
