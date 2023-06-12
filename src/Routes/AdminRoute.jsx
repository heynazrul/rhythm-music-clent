import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import loaderAnimation from '../assets/lottie/loader.json';
import Lottie from 'lottie-react';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin()

  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="h-[calc(100vh-100px)] flex items-center">
        <div className="w-52 mx-auto">
          <Lottie animationData={loaderAnimation}></Lottie>
        </div>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate
      to="/"
      state={{ from: location }}
      replace></Navigate>
  );
};

export default AdminRoute;
