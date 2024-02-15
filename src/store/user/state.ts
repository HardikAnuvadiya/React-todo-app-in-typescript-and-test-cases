const userInitialState = {
  user: {
    username: '',
    password: '',
    token: false,
  },
};

type UserState = typeof userInitialState;

export { userInitialState };
export type { UserState };
