import {
  LOAD_CATEGORY,
  SET_CATEGORY,
  SET_CONTACT_DATA,
  SET_USER,
  LOAD_AVAILABLE_SERVICES,
  LOAD_SCHEDULED_SERVICES,
  SET_MAP_SCHEDULED_SERVICES,
  SET_MAP_AVAILABLE_SERVICES,
  SET_CURRENT_POSITION_MAP,
} from './actionTypes';

export const loadCategory = payload => ({ type: LOAD_CATEGORY, payload });

export const setCategory = payload => ({ type: SET_CATEGORY, payload });

export const setContactData = payload => ({ type: SET_CONTACT_DATA, payload });

export const setUser = payload => ({ type: SET_USER, payload });

export const loadAvailableServices = payload => ({
  type: LOAD_AVAILABLE_SERVICES,
  payload,
});

export const setMapScheduledServices = payload => ({
  type: SET_MAP_SCHEDULED_SERVICES,
  payload,
});

export const setMapAvailableServices = payload => ({
  type: SET_MAP_AVAILABLE_SERVICES,
  payload,
});

export const loadScheduleServices = payload => ({
  type: LOAD_SCHEDULED_SERVICES,
  payload,
});

export const setCurrentPositionMap = payload => ({
  type: SET_CURRENT_POSITION_MAP,
  payload,
});
