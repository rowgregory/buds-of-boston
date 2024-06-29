import { useState } from 'react';
import Typewriter from '../../components/common/Typewriter';
import { useRegisterMutation } from '../../services/authApi';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { setProgress, toggleProgressBar } from '../../features/progress-bar/progressBarSlice';
import UIFx from 'uifx';
import { CartoonPop1 } from '../../assets/sound-effects';
import { useSelector } from 'react-redux';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const pop = new UIFx(CartoonPop1);
  const [register] = useRegisterMutation();
  const auth = useSelector((state: RootState) => state.auth)

  const handleInput = (e: any) => {
    const { value, name } = e.target;
    setInputs((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    dispatch(setProgress(0));
    if (inputs.password !== '' && inputs.username !== '') {
      await register({ username: inputs.username, password: inputs.password })
        .unwrap()
        .then((data: any) => {
          if (data.accountWasCreated) {
            pop.play();
            dispatch(setProgress(100));
            dispatch(toggleProgressBar(false));
            navigate('/admin/dashboard');
          }
        })
        .catch((err: any) => {
          dispatch(setProgress(100));
          dispatch(toggleProgressBar(false));
          console.error(err)
        });
    }
  };

  return (
    <div className='flex flex-col items-center overflow-hidden pt-40'>
      <div className='flex flex-col'>
        <Typewriter sentence='Register' speed={40} text='text-sm text-zinc-100 font-bold h-5' />
        <div className='flex flex-col sm:flex-row items-center gap-3 mt-2'>
          <input
            autoComplete='off'
            name='username'
            type='text'
            onChange={handleInput}
            placeholder='Username'
            className='text-lime-400 font-semibold text-sm focus:outline-none h-9 w-48 rounded-sm px-3 bg-zinc-900 placeholder:text-zinc-600'
          />
          <input
            autoComplete='off'
            name='password'
            type='password'
            onChange={handleInput}
            placeholder='Password'
            className='text-lime-400 font-semibold text-sm focus:outline-none h-9 w-48 rounded-sm px-3 bg-zinc-900 placeholder:text-zinc-600'
          />
          <button onClick={handleRegister} className='text-sm font-bold'>
            <i
              className={`fa-solid ${auth?.accountWasCreated ? 'fa-lock-open' : 'fa-lock'
                } fa-lg text-zinc-400 w-5 hover:text-zinc-500 duration-200`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
