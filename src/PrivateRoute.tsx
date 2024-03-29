import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from './store';

export function PrivateRoutes() {
  const user = useSelector((state: RootState) => state.userState.user);
  return user.token ? <Outlet /> : <Navigate to='/login' />;
}
