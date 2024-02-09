import { useState } from 'react';
import { todo } from './types';

export const Todo = () => {
  const [arrTodo, setArrTodo] = useState<any>([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <label>Todo:</label>
      <input
        type='text'
        className='todo-input'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          setArrTodo([
            ...arrTodo,
            { id: new Date().getTime(), todo: inputValue },
          ]);
          setInputValue('');
        }}
      >
        Add Todo
      </button>
      <br />
      <div>
        {arrTodo?.length > 0 &&
          arrTodo?.map((item: todo) => {
            return (
              <div key={item.id}>
                <div>{item?.todo}</div>
                <button
                  onClick={() => {
                    const newTodoArr = arrTodo.filter((todo: todo) => {
                      if (todo.id !== item.id) return item;
                    });
                    setArrTodo(newTodoArr);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
