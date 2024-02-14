import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../store/user/action';
import { userDataType } from './types';

export const Login = () => {
  const [value, setValue] = useState<userDataType>({
    username: '',
    password: '',
    token: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function login() {
    dispatch(logIn({ ...value, token: true }));
    navigate('/');
    setValue({ username: '', password: '', token: false });
  }

  return (
    <div>
      <title>Login</title>
      <label htmlFor=''>Username: </label>
      <input
        type='text'
        value={value.username}
        name='username'
        placeholder='test@gmail.com'
        onChange={(e: any) => {
          setValue({ ...value, username: e.target.value });
        }}
      />
      <br />
      <label htmlFor=''>Password: </label>
      <input
        type='password'
        value={value.password}
        name='password'
        placeholder='bs6567G23!!'
        onChange={(e: any) => {
          setValue({ ...value, password: e.target.value });
        }}
      />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};
