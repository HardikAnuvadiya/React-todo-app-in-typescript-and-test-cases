import React from 'react';
import { Todo } from '../Todo/Todo';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/user/action';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={async () => {
          dispatch(logOut());
          navigate('/login');
        }}
      >
        Logout
      </button>
      <Todo />
    </div>
  );
};
