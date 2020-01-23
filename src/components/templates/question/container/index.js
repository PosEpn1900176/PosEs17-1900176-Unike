// flow
import React from 'react';
import QuestionPresentation from '../presentation';
import { useSetContactData } from '../../../../hooks/useContactData';
import { useSelector } from 'react-redux';

const QuestionContainer = (props: Props) => {
  const selector = useSelector(state => state.signup.contactData);
  const setKeyContact = useSetContactData();
  const onChange = ({ id, value }) => {
    setKeyContact(id, value);
    props.onChange(value);
  };

  return (
    <QuestionPresentation
      value={selector[props.item.id].value}
      {...props}
      onChange={onChange}
    />
  );
};

export default QuestionContainer;
