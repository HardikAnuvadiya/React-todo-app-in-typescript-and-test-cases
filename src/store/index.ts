// src/store/store.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Import Redux Thunk middleware
import { todoReducer } from './todo/reducer';
import loggingMiddleware from '../middleware/loggingMiddleware';

const rootReducer: any = combineReducers({
  todoState: todoReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggingMiddleware)
); // Apply middleware

export type RootState = ReturnType<typeof rootReducer>;
export default store;
export { rootReducer };
