import { FormEvent, useEffect, useRef, useState } from 'react';
import { useVerifyCodeMutation } from '../services/codeApi';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { setProgress, toggleProgressBar } from '../features/progress-bar/progressBarSlice';
import { resetCodeSuccess } from '../features/code/codeSlice';
import { DescendMusicalMallet, GainAccess } from '../assets/sound-effects';
import useSoundEffect from '../utils/useSoundEffect';
import Lock from '../features/code/components/Lock';
import Consent from '../features/code/components/Consent';

const LockScreen = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef(null) as any;
  const [code, setCode] = useState('');
  const [consent, setConsent] = useState(false);
  const [verifyCode, { isLoading }] = useVerifyCodeMutation();
  const token = useAppSelector((state: RootState) => state.code.token);
  const success = useAppSelector((state: RootState) => state.code.success);
  const failSoundEffect = useSoundEffect(DescendMusicalMallet)
  const successSoundEffect = useSoundEffect(GainAccess)

  useEffect(() => {
    inputRef?.current?.focus();
    dispatch(resetCodeSuccess());
  }, [dispatch]);

  const handleVerifyCode = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(toggleProgressBar(true));
    dispatch(setProgress(15));
    await verifyCode({ code })
      .unwrap()
      .then((data: any) => {
        dispatch(setProgress(75));
        if (data?.codeIsValid) {
          successSoundEffect?.play();
          dispatch(setProgress(100));

          setTimeout(() => {
            setConsent(true);
            dispatch(setProgress(0));
            dispatch(toggleProgressBar(false));
          }, 250);
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
    <div className="flex items-center justify-center overflow-hidden pt-40">
      {consent ? (
        <Consent token={token} setConsent={setConsent} setCode={setCode} />
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

export default LockScreen;
