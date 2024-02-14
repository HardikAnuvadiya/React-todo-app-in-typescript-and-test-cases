import React from 'react';
import { Todo } from '../Todo/Todo';
import { persistor } from '../../store';

export const HomePage: React.FC = () => {
  return (
    <div>
      <button
        onClick={async () => {
          return await persistor.purge();
        }}
      >
        Logout
      </button>
      <Todo />
    </div>
  );
};
