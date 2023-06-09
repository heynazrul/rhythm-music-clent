import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react';
import signUpAnimation from '../../assets/lottie/signup-animation.json';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <>
      <Helmet>
        <title>Rhythm | Sign Up</title>
      </Helmet>
      <div className="hero min-h-[calc(100vh-200px)] bg-base-100 my-10">
        <div className="hero-content w-1/2 flex-col md:flex-row shadow-2xl ">
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
                  {...register('name', { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && <span className="text-error">Name field is required</span>}
              </div>
              {/* Email field*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register('email')}
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required!',
                    minLength: 6,
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                      message: 'Must have 1 capital & 1 special character',
                    },
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password && <span className="text-error">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && (
                  <span className="text-error">Password should be at least 6 characters</span>
                )}
              </div>
              {/* Confirm password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
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
