import { Navigate, useLocation } from "react-router-dom";
import Lottie from 'lottie-react';
import loaderAnimation from '../assets/lottie/loader.json';
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({ children }) => {
  
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();

    const location = useLocation();

    if (loading || isInstructorLoading) {
      return (
        <div className="h-[calc(100vh-100px)] flex items-center">
          <div className="w-32 mx-auto">
            <Lottie animationData={loaderAnimation}></Lottie>
          </div>
        </div>
      );
    }

    if (user && isInstructor) {
      return children;
    }
    return (
      <Navigate
        to="/"
        state={{ from: location }}
        replace></Navigate>
    );
};

export default InstructorRoute;