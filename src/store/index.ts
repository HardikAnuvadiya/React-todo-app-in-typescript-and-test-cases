// src/store/store.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Import Redux Thunk middleware
import { todoReducer } from './todo/reducer';
import loggingMiddleware from '../middleware/loggingMiddleware';
import { userReducer } from './user/reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
// import { encryptTransform } from 'redux-persist-transform-encrypt';

const rootReducer: any = combineReducers({
  todoState: todoReducer,
  userState: userReducer,
});

// const secretKey = 'sdmksd@$324iru2#@#';
// const encryptionTransform = encryptTransform({
//   secretKey: secretKey,
//   onError: function () {
//     // Handle the error.
//   },
// });

const persistConfig: any = {
  key: 'root',
  storage,
  // transforms: [encryptionTransform], // Apply the transform
  // Optionally, you can blacklist certain reducers or whitelist only specific ones.
  // blacklist: ['userState'],
  whitelist: ['todoState', 'userState'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, loggingMiddleware)
); // Apply middleware

export type RootState = ReturnType<typeof rootReducer>;
export default store;
export { rootReducer };
export const persistor = persistStore(store);