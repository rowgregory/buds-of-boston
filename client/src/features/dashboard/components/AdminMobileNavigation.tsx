import { Image } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import UIFx from 'uifx';
import { persistor, useAppDispatch } from '../../../store';
import { resetAuthSuccess } from '../../auth/authSlice';
import { DescendMusicalMallet } from '../../../assets/sound-effects';
import { setProgress, toggleProgressBar } from '../../progress-bar/progressBarSlice';
import { Logo } from '../../../assets/images';

const AdminMobileNavigation = ({ toggleMobileMenu, close }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const descend = new UIFx(DescendMusicalMallet);

  const handleLogout = () => {
    dispatch(setProgress(0));
    descend.play();
    persistor.purge();
    dispatch(resetAuthSuccess());
    dispatch(setProgress(100));
    dispatch(toggleProgressBar(false));
    close();
    navigate('/auth/login');
  };

  return (
    <div
      className={`${toggleMobileMenu ? 'w-screen left-0 overflow-hidden' : 'left-[-100vw] w-none'
        } fixed duration-200 min-h-screen bg-zinc-950 top-0 left-0 flex flex-col items-center justify-center gap-5 z-[60]`}
    >
      <Image
        onClick={close}
        src={Logo}
        className='w-40 top-1 left-3 block lg:hidden hover:text-lime-400 duration-200 cursor-pointer'
        alt='Budz of Boston'
      />
      <Link onClick={close} className='hover:text-lime-400 duration-200' to='/admin/dashboard'>
        Dashboard
      </Link>
      <Link onClick={close} className='hover:text-lime-400 duration-200' to='/admin/products'>
        Products
      </Link>
      <Link onClick={close} className='hover:text-lime-400 duration-200' to='/admin/code'>
        Code
      </Link>
      <Link
        onClick={handleLogout}
        className='hover:text-lime-400 duration-200'
        to='/auth/login'
      >
        Logout
      </Link>
    </div>
  );
};

export default AdminMobileNavigation;
