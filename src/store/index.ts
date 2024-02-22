// src/store/store.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Import Redux Thunk middleware
import { todoReducer } from './todo/reducer';
import loggingMiddleware from '../middleware/loggingMiddleware';
import { userReducer } from './user/reducer';
import { createTransform, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import CryptoJS from 'crypto-js';

const rootReducer: any = combineReducers({
  todoState: todoReducer,
  userState: userReducer,
});

const secretKey = 'sdmksd@$324iru2#@#';

const encryptor = createTransform(
  (inboundState, key) => {
    if (!inboundState) return inboundState;
    const cryptedText = CryptoJS.AES.encrypt(
      JSON.stringify(inboundState),
      secretKey
    );

    return cryptedText.toString();
  },
  (outboundState: any, key) => {
    if (!outboundState) return outboundState;
    const bytes = CryptoJS.AES.decrypt(outboundState, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decrypted);
  }
);

const persistConfig: any = {
  key: 'root',
  storage: storage,
  debug: true,
  transforms: [encryptor],
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