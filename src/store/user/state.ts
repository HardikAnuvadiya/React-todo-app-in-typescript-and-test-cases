const userInitialState = {
  user: {
    id: '',
    username: '',
    password: '',
    isAuthenticated: false,
    token: '',
  },
};

type UserState = typeof userInitialState;

export { userInitialState };
export type { UserState };
