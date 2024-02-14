import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [value, setValue] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  return (
    <div>
      <title>Login</title>
      <label htmlFor="">Username: </label>
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
      <label htmlFor="">Password: </label>
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
      <button
        onClick={() => {
          navigate('/');
          setValue({ username: '', password: '' });
        }}
      >
        Login
      </button>
    </div>
  );
};
