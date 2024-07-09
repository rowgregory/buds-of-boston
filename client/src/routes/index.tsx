import { Route, Routes } from 'react-router-dom'
import { ComponentType, Fragment, lazy } from 'react'
import LockScreen from './LockScreen';
import ProgressBar from '../components/common/ProgressBar';
import PrivateRoute from '../components/common/PrivateRoute';

type LazyModulePromise<T = Record<string, never>> = Promise<{ default: ComponentType<T> }>;

const Auth = lazy((): LazyModulePromise => import('./auth'));
const Code = lazy((): LazyModulePromise => import('./code'));
const Admin = lazy((): LazyModulePromise => import('./admin'));

export const MainRoutes = () => {
  return (
    <Fragment>
      <ProgressBar />
      <div className='bg-zinc-950 min-h-screen text-zinc-200'>
        <Routes>
          <Route index path='/' element={<LockScreen />} />
          <Route path='/auth/*' element={<Auth />} />
          <Route path='/code-validated/*' element={<Code />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin/*" element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </Fragment>
  )
}