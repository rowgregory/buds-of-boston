import { Fragment, useEffect } from 'react';
import io from 'socket.io-client';
import { useAppDispatch } from '../../store';
import { setProgress, toggleProgressBar } from '../../features/progress-bar/progressBarSlice';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
  const dispatch = useAppDispatch()
  const progressBar = useSelector((state: any) => state.progressBar);

  useEffect(() => {
    const socket = io('https://buds-of-boston.onrender.com', {
      withCredentials: true,
    });

    socket.on('progress', (progress) => {
      dispatch(toggleProgressBar(true))
      dispatch(setProgress(progress))
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Fragment>
      {progressBar?.toggleProgressBar && (
        <div className='fixed top-0 left-0 right-0 h-6 w-full z-10 bg-transparent'>
          <div
            id='progress-bar'
            className='bg-lime-400 w-full h-1'
            style={{ width: `${progressBar?.progress}%` }}
          ></div>
        </div>
      )}
    </Fragment>
  );
};

export default ProgressBar;
