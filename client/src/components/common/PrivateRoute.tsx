import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../store';

const PrivateRoute = () => {
  const isAdmin = useSelector((state: RootState) => state.auth?.isAdmin)
  return isAdmin ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute