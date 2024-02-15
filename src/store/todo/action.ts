import { todoDataType } from '../../components/Todo/types';

const addTodo = (payload: todoDataType) => {
  return {
    type: 'ADD_TODO',
    payload: payload,
  };
};

const deleteTodo = (payload: todoDataType) => {
  return {
    type: 'DELETE_TODO',
    payload: payload,
  };
};

const updateTodo = (payload: todoDataType) => {
  return {
    type: 'UPDATE_TODO',
    payload: payload,
  };
};

const clearTodo = () => {
  return {
    type: 'CLEAR',
  };
};

export { addTodo, deleteTodo, updateTodo, clearTodo };
