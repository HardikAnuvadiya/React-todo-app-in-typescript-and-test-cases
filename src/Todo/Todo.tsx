import { useState } from 'react';
import { todoDataType } from './types';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../store/todo/action';

export const Todo = () => {
  const arrTodo = useSelector((state: RootState) => state.todoState.arrTodo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({ id: 0, todo: '' });

  return (
    <div>
      <label>Todo:</label>
      <input
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
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(
              addTodo({ id: new Date().getTime(), todo: inputValue.todo })
            );
            setInputValue({ id: 0, todo: '' });
          }}
        >
          Add Todo
        </button>
      )}

      <br />
      <div>
        {arrTodo?.length > 0 &&
          arrTodo?.map((item: todoDataType) => {
            return (
              <div key={item?.id}>
                <div>{item?.todo}</div>
                <button
                  onClick={() => {
                    setInputValue({ id: item.id, todo: item.todo });
                  }}
                >
                  Edit
                </button>
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
