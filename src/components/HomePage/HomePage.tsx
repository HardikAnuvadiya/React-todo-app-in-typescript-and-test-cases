import React from 'react';
import { Todo } from '../Todo/Todo';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/user/action';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
          <button onClick={() => { dispatch(logOut())}}>Logout</button>
      <Todo />
    </div>
  );
};
