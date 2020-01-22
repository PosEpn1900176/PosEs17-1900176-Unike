import React from 'react';
import { TouchableOpacity, Text, View, Button, Image } from 'react-native';
import { drawer } from '../../../images';

const Navigation = props => {
  const toggle = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggle}>
        <Image
          source={drawer}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export { Navigation };
