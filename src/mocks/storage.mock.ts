import { applyMiddleware, combineReducers, createStore } from 'redux';
import { todoReducer } from '../store/todo/reducer';
import { userReducer } from '../store/user/reducer';
import loggingMiddleware from '../middleware/loggingMiddleware';
import { thunk } from 'redux-thunk';

const rootReducer: any = combineReducers({
  todoState: todoReducer,
  userState: userReducer,
});
const testStore: any = createStore(
  rootReducer,
  applyMiddleware(thunk, loggingMiddleware)
);
export { testStore };
