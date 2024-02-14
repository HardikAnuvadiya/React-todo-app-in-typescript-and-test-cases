import { userDataType } from '../../components/Login/types';
import { UserState, userInitialState } from './state';

export const userReducer = (
  state: UserState = userInitialState,
  action: { type: string; payload: userDataType }
) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, username: action.payload },
      };
    default:
      return state;
  }
};
