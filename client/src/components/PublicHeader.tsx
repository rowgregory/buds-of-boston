import { Link, useNavigate } from 'react-router-dom';
import { RootState, persistor, useAppDispatch } from '../store';
import UIFx from 'uifx';
import { DescendMusicalMallet } from '../assets/sound-effects';
import { useSelector } from 'react-redux';
import { setProgress, toggleProgressBar } from '../features/progress-bar/progressBarSlice';
import { resetAuth } from '../features/auth/authSlice';
import { Image } from '@chakra-ui/react';
import { Logo } from '../assets/images';

const PublicHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const descend = new UIFx(DescendMusicalMallet);
  const isAdmin = useSelector((state: RootState) => state.auth?.isAdmin);

  const handleLogout = () => {
    dispatch(setProgress(0));
    descend.play();
    persistor.purge();
    dispatch(resetAuth());
    dispatch(setProgress(100));
    dispatch(toggleProgressBar(false));
    navigate('/');
  };

  return (
    <div className='w-full h-20 bg-[#212121] flex items-center'>
      <div className='w-full max-w-[1400px] mx-auto px-3 lg:px-6 flex items-center justify-between'>
        <Image src={Logo} alt='Budz of Boston' className='h-20' />
        <div className='flex items-center'>
          {isAdmin && (
            <Link to='/admin/dashboard'>
              <i className='fa-solid fa-gauge-high text-zinc-300 cursor-pointer mr-5'></i>
            </Link>
          )}
          <i
            onClick={handleLogout}
            className='fa-solid fa-sign-out text-zinc-300 cursor-pointer duration-200 hover:text-zinc-400'
          ></i>
        </div>
      </div>
    </div>
  );
};

export default PublicHeader