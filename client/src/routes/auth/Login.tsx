import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../services/authApi';
import Typewriter from '../../components/common/Typewriter';
import { setProgress, toggleProgressBar } from '../../features/progress-bar/progressBarSlice';
import { useAppDispatch } from '../../store';
import { GainAccess } from '../../assets/sound-effects';
import useSoundEffect from '../../utils/useSoundEffect';
import useForm from '../../utils/useForm';
import LoginForm from '../../features/auth/components/LoginForm';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { inputs, handleInput } = useForm(['username', 'password']);
  const soundEffect = useSoundEffect(GainAccess);
  const [login, { isLoading }] = useLoginMutation();


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputs.password !== '' && inputs.username !== '') {
      dispatch(toggleProgressBar(true));
      dispatch(setProgress(25));
      await login({ username: inputs.username, password: inputs.password })
        .unwrap()
        .then((data: any) => {
          if (data.isAuthenticated) {
            dispatch(setProgress(100));
            soundEffect?.play();
            navigate('/admin/dashboard');
            setTimeout(() => {
              dispatch(toggleProgressBar(false));
              dispatch(setProgress(0));
            }, 250);
          }
        })
        .catch(() => {
          dispatch(toggleProgressBar(false));
          dispatch(setProgress(0));
        });
    }
  };

  return (
    <div className="flex flex-col items-center overflow-hidden pt-40">
      <div className="flex flex-col px-7">
        <Typewriter
          sentence="Login"
          speed={40}
          text="text-sm text-zinc-100 font-bold h-5"
        />
        <LoginForm
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Login;
