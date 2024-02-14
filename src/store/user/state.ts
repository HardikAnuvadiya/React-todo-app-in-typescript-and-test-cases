const userInitialState = {
  user: {
    username: '',
    password: '',
    token: '',
  },
};

type UserState = typeof userInitialState;

export { userInitialState };
export type { UserState };
