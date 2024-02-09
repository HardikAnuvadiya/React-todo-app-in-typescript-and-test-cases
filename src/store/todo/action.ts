import { todoDataType } from "../../Todo/types";

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

export { addTodo, deleteTodo };
