import { Navigate, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import loaderAnimation from '../assets/lottie/loader.json';
import useAuth from '../hooks/useAuth';
import useStudent from '../hooks/useStudent';

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isStudent, isStudentLoading] = useStudent();
  const location = useLocation();

  if (loading || isStudentLoading) {
    return (
      <div className="h-[calc(100vh-100px)] flex items-center">
        <div className="w-32 mx-auto">
          <Lottie animationData={loaderAnimation}></Lottie>
        </div>
      </div>
    );
  }

  if (user && isStudent) {
    return children;
  }
  return (
    <Navigate
      to="/"
      state={{ from: location }}
      replace></Navigate>
  );
};

export default StudentRoute;
