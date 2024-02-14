import React from 'react';
import { Todo } from '../Todo/Todo';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../store/user/action';
import { persistor } from '../../store';

export const HomePage: React.FC = () => {
  // const dispatch: any = useDispatch();
  return (
    <div>
      <button
        onClick={async () => {
          // dispatch(logOut());
          return await persistor.purge();
        }}
      >
        Logout
      </button>
      <Todo />
    </div>
  );
};
