import { Link, useNavigate, useParams } from 'react-router-dom';
import { RootState, persistor, useAppDispatch } from '../../../store';
import { DescendMusicalMallet } from '../../../assets/sound-effects';
import { useSelector } from 'react-redux';
import { setProgress, toggleProgressBar } from '../../progress-bar/progressBarSlice';
import adminSideNavigationLinkData from '../../../utils/adminSideNavigationLinkData';
import { Image } from '@chakra-ui/react';
import { Logo } from '../../../assets/images';
import { resetAuth } from '../../auth/authSlice';
import useSoundEffect from '../../../utils/useSoundEffect';

const AdminSideNavigation = () => {
  const params = useParams()['*'];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const soundEffect = useSoundEffect(DescendMusicalMallet);

  const handleLogout = () => {
    dispatch(toggleProgressBar(true));
    dispatch(setProgress(0));
    soundEffect?.play();
    persistor.purge();
    dispatch(setProgress(50));
    dispatch(resetAuth());
    dispatch(setProgress(100));
    navigate('/auth/login');

    setTimeout(() => {
      dispatch(toggleProgressBar(false));
      dispatch(setProgress(0));
    }, 200);
  };

  return (
    <div className='w-[240px]'>
      <div className='px-3 pt-5 mb-10'>
        <Link to={`/code-validated/${auth?.token}/items`}>
          <Image src={Logo} alt='Dream Budz' className='object-contain mx-auto' />
        </Link>
      </div>
      {adminSideNavigationLinkData(params).map((obj: any, i: number) => (
        <div key={i} className='grid grid-cols-9 mb-6 items-center group'>
          <i
            className={`${obj.icon} ${obj?.isActive
                ? 'bg-slate-600 rounded-tr-2xl rounded-br-2xl text-lime-400'
                : 'text-zinc-400'
              } col-span-2 py-2 pl-2 pr-3 w-fit duration-200 group-hover:text-lime-400`}
          ></i>
          <Link
            className={`${obj.isActive ? 'text-lime-400 font-bold' : 'text-zinc-400'
              } col-span-7 duration-200 group-hover:text-lime-400`}
            to={obj.linkKey}
          >
            {obj.textKey}
          </Link>
        </div>
      ))}
      <div
        onClick={handleLogout}
        className='grid grid-cols-9 mb-6 items-center cursor-pointer group'
      >
        <i
          className={`fa-solid fa-right-from-bracket text-zinc-400 col-span-2 py-2 pl-2 pr-3 w-fit duration-200 group-hover:text-lime-400`}
        ></i>
        <p className='text-zinc-400 col-span-7 duration-200 group-hover:text-lime-400'>Logout</p>
      </div>
    </div>
  );
};

export default AdminSideNavigation;
