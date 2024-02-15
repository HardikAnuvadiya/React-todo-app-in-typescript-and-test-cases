// __mocks__/redux-persist-storage.js
const storageMock = () => {
  let store: any = {};

  return {
    getItem: jest.fn((key, cb) => {
      cb(null, store[key]);
    }),
    setItem: jest.fn((key, value, cb) => {
      store[key] = value.toString();
      cb(null);
    }),
    removeItem: jest.fn((key, cb) => {
      delete store[key];
      cb(null);
    }),
  };
};

export default storageMock;
