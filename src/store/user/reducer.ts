import { userDataType } from '../../components/Login/types';
import { UserState, userInitialState } from './state';

export const userReducer = (
  state: UserState = userInitialState,
  action: { type: string; payload: userDataType }
) => {
  switch (action.type) {
    case 'LOG_IN':
      if (
        state?.user?.username === action?.payload?.username &&
        state?.user?.password === action?.payload?.password
      ) {
        return {
          ...state,
          user: { ...action.payload, token: true },
        };
      } else {
        return state;
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          username: '',
          password: '',
          token: false,
        },
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
