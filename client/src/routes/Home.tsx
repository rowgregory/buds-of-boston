import { ChangeEvent, useState } from 'react';
import Typewriter from '../components/common/Typewriter';
const Home = () => {
  const [code, setCode] = useState('');
  const authorize = () => {
    fetch(
      `https://buds-of-boston.onrender.com/api/auth/authorize-code/${code}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.tokenIsValid) {
          // TODO
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div className='min-h-screen dark:bg-black bg-white dark:text-slate-50 text-zinc-800 flex items-center justify-center overflow-hidden'>
      <div className='flex flex-col relative z-10'>
        <Typewriter sentence='Enter code' speed={40} text='text-2xl' />
        <input
          name='code'
          type='text'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
          className='text-slate-900'
        />
        <button onClick={() => authorize()}>Authorize</button>
      </div>
    </div>
  );
};

export default Home;
