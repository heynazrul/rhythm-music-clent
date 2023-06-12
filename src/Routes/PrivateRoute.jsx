import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import loaderAnimation from '../assets/lottie/loader.json'
import Lottie from 'lottie-react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    
     const location = useLocation();
  console.log('loading from private ' , loading);
     if (loading) {
       return (
         <div className="h-[calc(100vh-100px)] flex items-center">
           <div className="w-52 mx-auto">
             <Lottie animationData={loaderAnimation}></Lottie>
           </div>
         </div>
       );
     }

     if (user) {
       return children;
     }
     return (
       <Navigate
         to="/login"
         state={{ from: location }}
         replace></Navigate>
     );
};

export default PrivateRoute;