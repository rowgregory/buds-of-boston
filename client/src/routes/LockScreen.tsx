import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Typewriter from '../components/common/Typewriter';
import { Link } from 'react-router-dom';
import UIfx from 'uifx';
import descendMusicalMallet from '../assets/sound-effects/descend-musical-mallet.mp3';
import { useVerifyCodeMutation } from '../services/codeApi';
import { RootState, useAppDispatch } from '../store';
import { setProgress, toggleProgressBar } from '../features/progress-bar/progressBarSlice';
import { resetCodeSuccess } from '../features/code/codeSlice';
import { useSelector } from 'react-redux';
import { GainAccess } from '../assets/sound-effects';

const LockScreen = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef(null) as any;
  const [code, setCode] = useState('');
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    inputRef?.current?.focus();
    dispatch(resetCodeSuccess())
  }, []);

  const gainAccess = new UIfx(GainAccess);
  const descend = new UIfx(descendMusicalMallet);

  const [verifyCode] = useVerifyCodeMutation();
  const success = useSelector((state: RootState) => state.code.success);
  const token = useSelector((state: RootState) => state.code.token);

  const verify = async () => {
    dispatch(setProgress(0));
    await verifyCode({ code })
      .unwrap()
      .then((data: any) => {
        if (data?.codeIsValid) {
          dispatch(setProgress(95));
          gainAccess.play();
          setTimeout(() => {
            setConsent(true);
            dispatch(setProgress(100));
            dispatch(toggleProgressBar(false));
          }, 300)
        }
      })
      .catch((err: any) => {
        dispatch(setProgress(0));
        descend.play();
        inputRef.current.value = '';
        setCode('');
        console.error('ERROR: ', { message: err });
      });
  };

  return (
    <div className='flex items-center justify-center overflow-hidden pt-40'>
      {consent ? (
        <div className='flex'>
          <div className='flex flex-col'>
            <Typewriter
              sentence='Are you at least 21 years old?'
              speed={20}
              text='text-sm text-zinc-100 font-bold h-5'
            />
            <div className='flex justify-center  w-[200.22px]'>
              <Link
                to={`/code-validated/${token}/items`}
                className={`duration-200 ml-3 mt-8 text-sm font-bold`}
              >
                <i className={`fa-solid fa-thumbs-up fa-lg text-zinc-400 w-5 duration-200 hover:text-lime-400`}></i>
              </Link>
              <button
                onClick={() => {
                  dispatch(resetCodeSuccess());
                  setConsent(false);
                  setCode('');
                }}
                className={`duration-200 ml-3 mt-8 text-sm font-bold`}
              >
                <i className={`fa-solid fa-thumbs-down fa-lg text-zinc-400 w-5 duration-200 hover:text-red-400`}></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex'>
          <div className='flex flex-col'>
            <Typewriter
              sentence='Enter code: '
              speed={40}
              text='text-sm text-zinc-100 font-bold h-5'
            />
            <input
              autoComplete='off'
              ref={inputRef}
              name='code'
              type='text'
              onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
              className='text-lime-400 font-semibold text-sm focus:outline-none h-9 w-48 rounded-sm px-3 bg-zinc-900 mt-1'
            />
          </div>
          <button
            type='submit'
            disabled={code === ''}
            onClick={() => verify()}
            className={`${code !== '' ? 'opacity-100' : 'opacity-0'
              } duration-200 ml-3 mt-8 text-sm font-bold focus:outline-none`}
          >
            <i
              className={`fa-solid ${success ? 'fa-lock-open' : 'fa-lock'
                } fa-lg text-zinc-400 w-5 focus:outline-none hover:text-zinc-500 duration-200`}
            ></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default LockScreen;
