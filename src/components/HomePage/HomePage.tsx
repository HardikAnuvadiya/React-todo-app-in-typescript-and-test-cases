import React from 'react';
import { Todo } from '../Todo/Todo';
import { persister } from '../../store';

export const HomePage: React.FC = () => {
  return (
    <div>
      <button
        onClick={async () => {
          return await persister.purge();
        }}
      >
        Logout
      </button>
      <Todo />
    </div>
  );
};
