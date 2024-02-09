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
    default:
      return state;
  }
};
