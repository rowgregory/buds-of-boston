import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UIFx from 'uifx';
import { useLoginMutation } from '../../services/authApi';
import Typewriter from '../../components/common/Typewriter';
import { setProgress, toggleProgressBar } from '../../features/progress-bar/progressBarSlice';
import { RootState, useAppDispatch } from '../../store';
import { GainAccess } from '../../assets/sound-effects';
import { useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const gainAccess = new UIFx(GainAccess);

  const [login] = useLoginMutation();
  const auth = useSelector((state: RootState) => state.auth);


  const handleInput = (e: any) => {
    const { value, name } = e.target;
    setInputs((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    dispatch(setProgress(0));
    if (inputs.password !== '' && inputs.username !== '') {
      await login({ username: inputs.username, password: inputs.password })
        .unwrap()
        .then((data: any) => {
          if (data.isAuthenticated) {
            gainAccess.play();
            dispatch(setProgress(100));
            dispatch(toggleProgressBar(false));
            navigate('/admin/dashboard');
          }
        })
        .catch((err: any) => {
          dispatch(setProgress(0));
          dispatch(toggleProgressBar(false));
          console.error(err);
        });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className='flex flex-col items-center overflow-hidden pt-40'>
      <div className='flex flex-col px-7'>
        <Typewriter sentence='Login' speed={40} text='text-sm text-zinc-100 font-bold h-5' />
        <form onSubmit={handleSubmit} className='flex flex-row items-center gap-3 mt-2'>
          <input
            autoComplete='off'
            name='username'
            type='text'
            onChange={handleInput}
            placeholder='Username'
            className='text-lime-400 font-semibold text-sm focus:outline-none h-9 w-40 sm:w-48 rounded-sm px-3 bg-zinc-900 placeholder:text-zinc-600'
          />
          <input
            autoComplete='off'
            name='password'
            type='password'
            onChange={handleInput}
            placeholder='Password'
            className='text-lime-400 font-semibold text-sm focus:outline-none h-9 w-40 sm:w-48 rounded-sm px-3 bg-zinc-900 placeholder:text-zinc-600'
          />
          <button type='submit' className='text-sm font-bold'>
            <i
              className={`fa-solid ${auth?.isAuthenticated ? 'fa-lock-open' : 'fa-lock'
                } fa-lg text-zinc-400 w-5 hover:text-zinc-500 duration-200`}
            ></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
