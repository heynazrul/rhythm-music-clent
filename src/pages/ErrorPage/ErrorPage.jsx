import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react';
import errorAnimation from '../../assets/lottie/error.json';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="bg-white h-screen">
      <Helmet>
        <title>Rhythm | 404!</title>
      </Helmet>
      <div className="">
        <Lottie
          className="h-[calc(100vh-100px)]"
          animationData={errorAnimation}></Lottie>
      </div>
      <div className='text-center'>
        <Link
          to={'/'}
          className="btn btn-wide text-center">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
