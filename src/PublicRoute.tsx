import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from './store';

export function PublicRoutes() {
  const user = useSelector((state: RootState) => state.userState.user);
  return user.token ? <Navigate to='/' /> : <Outlet />;
}
