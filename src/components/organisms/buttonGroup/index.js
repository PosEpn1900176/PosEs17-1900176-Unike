import React, { useState } from 'react';
import { View, Button, Text, Icon } from 'native-base';
const getStyles = isActive => {
  const backgroundColor = isActive ? '#ccc' : '#eee';
  return {
    backgroundColor,
    borderColor: '#ccc',
    marginBottom: 4,
  };
};

const ButtonGroup = ({ data, onMode, defaultSelected = 'DRIVING' }) => {
  const [selected, setSelected] = useState(defaultSelected);
  const handleMode = value => {
    setSelected(value);
    onMode(value);
  };
  return data.map((button, index) => {
    return (
      <Button
        bordered
        key={index}
        style={getStyles(selected === button.mode)}
        onPress={() => handleMode(button.mode)}>
        <Icon type={button.icon.type} name={button.icon.name} />
      </Button>
    );
  });
};

export default ButtonGroup;
