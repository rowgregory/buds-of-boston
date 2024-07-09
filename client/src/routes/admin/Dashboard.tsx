import { useGetDashboardDataQuery } from '../../services/dashboardApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatDateWithTimezone } from '../../utils/dateFunctions';
import Spinner from '../../components/common/Spinner';

const Dashboard = () => {
  const navigate = useNavigate();
  const dashboardInfo = useSelector((state: RootState) => state.dashboard.info);
  const [showCode, setShowCode] = useState(false);

  const { isLoading } = useGetDashboardDataQuery();

  return (
    <div className='min-h-screen pt-12 md:pt-16 px-[10px] sm:px-[16px] md:px-8 pb-3'>
      <div className='font-Matter-Medium text-xl mb-3.5'>Dashboard</div>
      <div className='max-w-screen-lg w-full mx-auto grid grid-cols-12 gap-8 '>
        <Link
          to='/admin/products'
          className='col-span-12 md:col-span-6 h-40 bg-gradient-to-r from-blue-800 to-blue-300 rounded-sm px-8 py-5 cursor-pointer relative overflow-hidden flex flex-col justify-between'
        >
          {isLoading ? (
            <div className='m-auto'>
              <Spinner fill='fill-white' />
            </div>
          ) : (
            <Fragment>
              <p className='uppercase font-thin tracking-wider text-sm'>Products</p>
              <h1 className='text-5xl font-semibold'>{dashboardInfo?.productsCount}</h1>
              <p className='text-xs text-white/50'>
              </p>
            </Fragment>
          )}
          <i className='fas fa-box-open text-white/10 text-[200px] absolute -right-16 -top-0'></i>
        </Link>
        <button
          onClick={() => navigate('/admin/code')}
          className='col-span-12 md:col-span-6 h-40 bg-gradient-to-r from-lime-800 to-lime-300 rounded-sm px-8 py-5 cursor-pointer flex flex-col justify-between relative overflow-hidden'
        >
          {isLoading ? (
            <div className='m-auto'>
              <Spinner fill='fill-white' />
            </div>
          ) : (
            <Fragment>
              <p className='uppercase font-thin tracking-wider text-sm'>Code</p>
              <h1
                onClick={(e: any) => {
                  e.stopPropagation();
                  setShowCode(!showCode);
                }}
                className='text-5xl font-semibold w-fit'
              >
                {showCode ? dashboardInfo?.code?.code : '****'}
              </h1>
              <p className='text-xs text-white/50'>
                Last updated: {formatDateWithTimezone(dashboardInfo?.code?.updatedAt)}
              </p>
            </Fragment>
          )}
          <i className='fas fa-code-compare text-white/15 text-[200px] absolute -right-16 -top-0'></i>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
