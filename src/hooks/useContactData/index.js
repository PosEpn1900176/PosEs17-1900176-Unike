import { useDispatch, useSelector } from 'react-redux';
import { setContactData } from '../../actions';
import validate from '../../lib/validate';

const useSetContactData = () => {
  const storeContact = useSelector(state => state.signup.contactData);
  const dispatch = useDispatch();

  const set = (key, value) => {
    let contact = { ...storeContact };
    contact[key].value = value;
    contact[key].valid = validate(key, value);
    dispatch(setContactData(contact));
  };

  return set;
};

const useDisabledSignup = () => {
  const selector = useSelector(state => state.signup.contactData);
  const isDisabled = fields => {
    return (
      fields.filter(field => {
        return !selector[field].valid;
      }).length > 0
    );
  };

  return isDisabled;
};

export { useSetContactData, useDisabledSignup };
