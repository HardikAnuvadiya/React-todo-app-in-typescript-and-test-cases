import { todoDataType } from '../../Todo/types';
import { TodoState, initialState } from './state';

export const todoReducer = (
  state: TodoState = initialState,
  action: { type: string; payload: todoDataType }
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        arrTodo: [...state.arrTodo, action.payload],
      };
    case 'DELETE_TODO':
      const newTodoArr = state.arrTodo.filter((todo: todoDataType) => {
        if (todo.id !== action?.payload?.id) return todo;
      });
      return {
        ...state,
        arrTodo: newTodoArr,
      };
    case 'UPDATE_TODO':
      const updatedTodoArr = state.arrTodo.map((todo: todoDataType) => {
        if (todo.id === action?.payload?.id) return action.payload;
        else return todo;
      });
      return {
        ...state,
        arrTodo: updatedTodoArr,
      };
    default:
      return state;
  }
};
