import React from 'react';
import { Input, Icon } from 'native-base';

const FormInput = ({ error, ...props }) => {
  return (
    <>
      <Input {...props} />
      {error && <Icon name="close-circle" />}
    </>
  );
};

export { FormInput };
