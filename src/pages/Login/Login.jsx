import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/lottie/login-animation.json';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { signIn,  } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    const toastPromise = toast.loading('Please wait...');
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        toast.update(toastPromise, {
          render: 'Sign In Successful!',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
          closeOnClick: true,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message.split('/')[1].split(')')[0];

        toast.update(toastPromise, {
          render: message,
          type: 'error',
          isLoading: false,
          autoClose: 2000,
          closeOnClick: true,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Rhythm | Login</title>
      </Helmet>
      <div className="hero min-h-[calc(100vh-200px)] bg-base-100">
        <div className="hero-content w-1/2 flex-col md:flex-row shadow-2xl ">
          <Lottie animationData={loginAnimation}></Lottie>
          <div className="card md:w-1/2 min-w-max max-w-sm bg-base-200">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body pb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register('email', { required: 'Email is require' })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && errors.email.type === 'required' && (
                  <span className="text-error">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="form-control relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    {...register('password', { required: 'Password is require' })}
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  {/* Show password */}
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer "
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <AiFillEye
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                  {errors.password && errors.password.type === 'required' && (
                    <span className="text-error">{errors.password.message}</span>
                  )}
                </div>
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                {/* TODO: make button disable for captcha */}
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={'Login'}
                  disabled={false}
                />
              </div>
            </form>
            <div>
              <SocialLogin></SocialLogin>
            </div>
            <p className="text-center pb-3">
              <small>
                New Here?{' '}
                <Link
                  to={'/signup'}
                  className="text-info font-semibold">
                  Create a new Account
                </Link>{' '}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
