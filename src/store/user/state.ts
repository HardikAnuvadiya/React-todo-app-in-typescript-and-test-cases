const userInitialState = {
  user: {
    username: 'hardik.anuvadiya@gtcsys.com',
    password: '123',
    token: false,
  },
};

type UserState = typeof userInitialState;

export { userInitialState };
export type { UserState };
