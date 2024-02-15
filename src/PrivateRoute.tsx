import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from './store';
import { userDataType } from './components/Login/types';

export function PrivateRoutes() {
  const user: userDataType = useSelector(
    (state: RootState) => state?.userState?.user
  );
  return user?.token ? <Outlet /> : <Navigate to='/login' />;
}
