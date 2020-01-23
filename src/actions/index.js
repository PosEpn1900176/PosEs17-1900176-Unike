import { LOAD_CATEGORY, SET_CATEGORY, SET_CONTACT_DATA } from './actionTypes';

export const loadCategory = payload => ({ type: LOAD_CATEGORY, payload });

export const setCategory = payload => ({ type: SET_CATEGORY, payload });

export const setContactData = payload => ({ type: SET_CONTACT_DATA, payload });
