import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from '../../components/common/Typewriter';
import { useRegisterMutation, useVerifyRegisterCodeMutation } from '../../services/authApi';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { setProgress, toggleProgressBar } from '../../features/progress-bar/progressBarSlice';
import useForm from '../../utils/useForm';
import useSoundEffect from '../../utils/useSoundEffect';
import { AscendMusicalMallet, DescendMusicalMallet } from '../../assets/sound-effects';
import { resetAuthSuccess } from '../../features/auth/authSlice';
import RegisterForm from '../../features/auth/components/RegisterForm';
import Lock from '../../features/code/components/Lock';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null) as any;
  const [code, setCode] = useState('');
  const { inputs, handleInput } = useForm(['username', 'password']);
  const soundEffect = useSoundEffect(AscendMusicalMallet);
  const failSoundEffect = useSoundEffect(DescendMusicalMallet);
  const success = useAppSelector((state: RootState) => state.auth.success);

  const [register, { isLoading }] = useRegisterMutation();
  const [verifyRegisterCode] = useVerifyRegisterCodeMutation();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputs.password !== '' && inputs.username !== '') {
      dispatch(toggleProgressBar(true));
      dispatch(setProgress(15));
      await register({ username: inputs.username, password: inputs.password })
        .unwrap()
        .then((data: any) => {
          if (data.accountWasCreated) {
            dispatch(setProgress(100));
            soundEffect?.play();
            navigate('/admin/dashboard');
            setTimeout(() => {
              dispatch(toggleProgressBar(false));
              dispatch(setProgress(0));
              dispatch(resetAuthSuccess())
            }, 250);
          }
        })
        .catch(() => {
          failSoundEffect?.play();
          dispatch(toggleProgressBar(false));
          dispatch(setProgress(0));
        });
    }
  };

  const handleVerifyCode = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(toggleProgressBar(true));
    dispatch(setProgress(15));
    await verifyRegisterCode({ code })
      .unwrap()
      .then((data: any) => {
        dispatch(setProgress(75));
        if (data?.codeValidated) {
          dispatch(setProgress(100));
          setTimeout(() => {
            dispatch(setProgress(0));
            dispatch(toggleProgressBar(false));
          }, 100);
        }
      })
      .catch(() => {
        dispatch(setProgress(0));
        dispatch(toggleProgressBar(false));
        failSoundEffect?.play();
        inputRef.current.value = '';
        setCode('');
      });
  };

  return (
    <div className="flex flex-col items-center overflow-hidden pt-40">
      {success ? (
        <div className="flex flex-col">
          <Typewriter
            sentence={success ? 'Register' : 'Enter Code'}
            speed={40}
            text="text-sm text-zinc-100 font-bold h-5"
          />
          <RegisterForm
            handleSubmit={handleRegister}
            handleInput={handleInput}
            isLoading={isLoading}
          />
        </div>
      ) : (
        <Lock
          inputRef={inputRef}
          setCode={setCode}
          code={code}
          handleVerifyCode={handleVerifyCode}
          isLoading={isLoading}
          success={success}
        />
      )}
    </div>
  );
};

export default Register;
