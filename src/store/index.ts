// src/store/store.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Import Redux Thunk middleware
import { todoReducer } from './todo/reducer';

const rootReducer: any = combineReducers({
  todoState: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply middleware

export type RootState = ReturnType<typeof rootReducer>;
export default store;
