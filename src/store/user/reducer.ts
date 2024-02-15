import { userDataType } from '../../components/Login/types';
import { UserState, userInitialState } from './state';

export const userReducer = (
  state: UserState = userInitialState,
  action: { type: string; payload: userDataType }
) => {
  switch (action.type) {
    case 'LOG_IN':
      if (
        'hardik.anuvadiya@gtcsys.com' === action?.payload?.username &&
        '123' === action?.payload?.password
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
