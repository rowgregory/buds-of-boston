import { FC } from 'react';
import { useAppDispatch } from '../../../store';
import { resetCodeSuccess } from '../codeSlice';
import Typewriter from '../../../components/common/Typewriter';
import { Link } from 'react-router-dom';

interface ConsentProps {
  token: string | null;
  setConsent: any;
  setCode: any;
}

const Consent: FC<ConsentProps> = ({ token, setConsent, setCode }) => {
  const dispatch = useAppDispatch();

  return (
    <div className='flex flex-col'>
      <Typewriter
        sentence='Are you at least 21 years old?'
        speed={20}
        text='text-sm text-zinc-100 font-bold h-5'
      />
      <div className='flex justify-center w-[200.22px]'>
        <Link
          to={`/code-validated/${token}/items`}
          className={`duration-200 ml-3 mt-8 text-sm font-bold`}
        >
          <i className='fa-solid fa-thumbs-up fa-lg text-zinc-400 w-5 duration-200 hover:text-lime-400'></i>
        </Link>
        <button
          onClick={() => {
            dispatch(resetCodeSuccess());
            setConsent(false);
            setCode('');
          }}
          className={`duration-200 ml-3 mt-8 text-sm font-bold`}
        >
          <i className='fa-solid fa-thumbs-down fa-lg text-zinc-400 w-5 duration-200 hover:text-lime-400'></i>
        </button>
      </div>
    </div>
  );
};

export default Consent;
