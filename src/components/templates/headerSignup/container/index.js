import React from 'react';
import HeaderSignupPresentation from '../presentation';

const HeaderSignupContainer = props => {
  return <HeaderSignupPresentation {...props} onBack={props.onBack} />;
};

export default HeaderSignupContainer;
