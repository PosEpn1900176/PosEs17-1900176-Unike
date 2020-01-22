import React from 'react';
import SignupSurveyPresentation from '../presentation';
import { useSetContactData } from '../../../../../hooks/useContactData';
import question from './data';
import { useSaveSignup } from '../../../../../hooks/useSave';

const SignupSurveyContainer = ({ navigation }) => {
  const setKeyContact = useSetContactData();
  const [data, save] = useSaveSignup();
  const goPage = page => navigation.navigate(page);

  const onChange = key => value => setKeyContact(key, value);

  const onSave = () => {
    save();
  };

  return (
    <SignupSurveyPresentation
      data={question}
      onBack={() => goPage('SignupCategories')}
      onForward={() => goPage('SignupAuth')}
      onChange={onChange}
      onSave={onSave}
    />
  );
};

export default SignupSurveyContainer;
