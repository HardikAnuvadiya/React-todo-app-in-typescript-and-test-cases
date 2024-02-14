// src/store/store.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Import Redux Thunk middleware
import { todoReducer } from './todo/reducer';
import loggingMiddleware from '../middleware/loggingMiddleware';
import { userReducer } from './user/reducer';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/es/storage';

const rootReducer: any = combineReducers({
  todoState: todoReducer,
  userState: userReducer,
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   // Optionally, you can blacklist certain reducers or whitelist only specific ones.
//   // blacklist: ['userState'],
//   // whitelist: ['todoState'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggingMiddleware)
); // Apply middleware

export type RootState = ReturnType<typeof rootReducer>;
export default store;
export { rootReducer };
