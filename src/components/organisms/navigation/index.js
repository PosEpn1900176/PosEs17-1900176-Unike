import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Icon, Container, Content, Text } from 'native-base';
import { drawer } from '../../../images';
import style from './style';

const Navigation = props => {
  const toggle = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <Content>
      <View style={style.space}>
        <TouchableOpacity onPress={toggle}>
          <Icon name="menu" />
        </TouchableOpacity>
      </View>
    </Content>
  );
};

export { Navigation };
