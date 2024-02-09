import { useState } from 'react';
import { todoDataType } from './types';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../store/todo/action';

export const Todo = () => {
  const arrTodo = useSelector((state: RootState) => state.todoState.arrTodo);
  const dispatch = useDispatch();
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
          dispatch(addTodo({ id: new Date().getTime(), todo: inputValue }));
          setInputValue('');
        }}
      >
        Add Todo
      </button>
      <br />
      <div>
        {arrTodo?.length > 0 &&
          arrTodo?.map((item: todoDataType) => {
            return (
              <div key={item?.id}>
                <div>{item?.todo}</div>
                <button
                  onClick={() => {
                    dispatch(deleteTodo(item));
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
