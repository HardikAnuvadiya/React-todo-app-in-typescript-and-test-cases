import { userDataType } from '../../components/Login/types';

const login = (payload: userDataType) => {
  return {
    type: 'LOG_IN',
    payload: payload,
  };
};

const logOut = (payload: userDataType) => {
  return {
    type: 'LOG_OUT',
    payload: payload,
  };
};

const updateUser = (payload: userDataType) => {
  return {
    type: 'UPDATE_USER',
    payload: payload,
  };
};

export { login, logOut, updateUser };
