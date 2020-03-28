import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';
import { user } from '../../../images';

const ImageUser = ({ photo }) => {
  const image = photo ? { uri: `data:image/png;base64,${photo}` } : user;
  return <ImageBackground source={image} style={styles.image} />;
};

export { ImageUser };
