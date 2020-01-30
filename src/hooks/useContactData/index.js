import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContactData } from '../../actions';
import validate from '../../lib/validate';

const dateToString = date => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date
    .getDate()
    .toString()
    .padStart(2, '0');
  const year = date.getFullYear();

  return `${month}-${day}-${year}`;
};

const useSetContactData = () => {
  const storeContact = useSelector(state => state.signup.contactData);
  const dispatch = useDispatch();

  const set = (key, value) => {
    let contact = { ...storeContact };
    console.log(key, value)
    contact[key].value = value;
    contact[key].valid = validate(key, value);
    contact[key].pristine = false;
    dispatch(setContactData(contact));
  };

  return set;
};

const useDisabledSignup = fields => {
  const selector = useSelector(state => state.signup.contactData);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(
      fields.filter(field => {
        return selector[field].pristine || !selector[field].valid;
      }).length > 0,
    );
  }, [fields, selector]);

  return disabled;
};

export { useSetContactData, useDisabledSignup };
