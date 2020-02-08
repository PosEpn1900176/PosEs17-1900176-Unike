import React from 'react';
import ActionButtonsPresentation from '../presentation';

const ActionButtonsContainer = props => {
  return <ActionButtonsPresentation {...props} onPress={props.onPress} />;
};

export default ActionButtonsContainer;
