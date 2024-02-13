import { useState } from 'react';
import { todoDataType } from './types';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../store/todo/action';
import { Listing } from './Lsiting';

export const Todo = () => {
  const arrTodo = useSelector((state: RootState) => state.todoState.arrTodo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ id: 0, todo: '' });

  return (
    <div>
      <label>Todo:</label>
      <input
        data-testid='todo-input'
        type='text'
        className='todo-input'
        value={inputValue.todo}
        onChange={(e) => {
          setInputValue({ ...inputValue, todo: e.target.value });
        }}
      />
      <br />
      {arrTodo.find((todo: todoDataType) => todo.id === inputValue.id) ? (
        <button
          onClick={() => {
            dispatch(updateTodo(inputValue));
            setInputValue({ id: 0, todo: '' });
          }}
          data-testid={`update-btn-${inputValue.id}`}
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: inputValue.id || new Date().getTime(),
                todo: inputValue.todo,
              })
            );
            setInputValue({ id: 0, todo: '' });
          }}
          data-testid='add-todo-button'
        >
          Add Todo
        </button>
      )}
      <br />
      <Listing arrTodo={arrTodo} setInputValue={setInputValue} />
    </div>
  );
};
