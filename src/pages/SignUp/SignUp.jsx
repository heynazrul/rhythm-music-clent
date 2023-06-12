import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react';
import signUpAnimation from '../../assets/lottie/signup-animation.json';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const toastPromise = toast.loading('Please wait registering...');
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL).then(() => {
          const saveUser = { name: data.name, email: data.email, photoURL: data.photoURL, role: 'student' };
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                // toast.success('Registration Successful');
                toast.update(toastPromise, {
                  render: 'Registration Successful!',
                  type: 'success',
                  isLoading: false,
                  autoClose: 2000,
                  closeOnClick: true,
                });
                navigate('/');
              }
            });
        });
      })
      .catch((error) => {
        const message = error.message.split('/')[1].split(')')[0];
        console.log(error);
        toast.update(toastPromise, {
          render: message,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Helmet>
        <title>Rhythm | Sign Up</title>
      </Helmet>
      <div className="hero min-h-[calc(100vh-200px)] bg-base-100 my-10">
        <div className="hero-content w-2/3 flex-col md:flex-row shadow-2xl ">
          <Lottie animationData={signUpAnimation}></Lottie>
          <div className="card md:w-1/2 min-w-max max-w-sm bg-base-200 flex-shrink-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body pb-4">
              {/* Name field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register('name')}
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              {/* Email field*/}
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
              {/* Password Field */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <div className="form-control relative ">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required!',
                      minLength: 6,
                      pattern: {
                        value: /(?=.*[A-Z])/,
                        message: 'Password must contain one capital letter',
                      },
                      validate: {
                        hasSpecialCharacter: (value) => {
                          return /[@$!%*?&]/.test(value) || 'Password should contain one special character.';
                        },
                      },
                    })}
                    placeholder="Password"
                    className="input input-bordered "
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
                </div>

                {errors.password && errors.password.type === 'required' && (
                  <span className="text-error">{errors.password.message}</span>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                  <span className="text-error">Password should be at least 6 characters</span>
                )}
                {errors.password && errors.password.type === 'pattern' && (
                  <span className="text-error">{errors.password.message}</span>
                )}
                {errors.password && errors.password.type === 'hasSpecialCharacter' && (
                  <p className="text-error">{errors.password.message}</p>
                )}
              </div>
              {/* Confirm password field */}
              <div>
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="form-control relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    {...register('passwordConfirmation', {
                      required: 'Please confirm password!',
                      validate: {
                        matchesPreviousPassword: (value) => {
                          const { password } = getValues();
                          return password === value || 'Passwords should match!';
                        },
                      },
                    })}
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  {/* Show password */}
                  {showConfirmPassword ? (
                    <AiFillEyeInvisible
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer "
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  ) : (
                    <AiFillEye
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  )}
                </div>
                {errors.passwordConfirmation && <p className="text-error">{errors.passwordConfirmation.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  {...register('photoURL')}
                  placeholder="Your photo URL"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                {/* TODO: make button disable for captcha */}
                <input
                  className="btn btn-primary btn-md"
                  type="submit"
                  value={'Sign Up'}
                  disabled={false}
                />
              </div>
            </form>
            <div>
              <SocialLogin></SocialLogin>
            </div>
            <p className="text-center pb-3">
              <small>
                Already Have an Account?{' '}
                <Link
                  to={'/login'}
                  className="text-info font-semibold">
                  Login Now
                </Link>{' '}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
