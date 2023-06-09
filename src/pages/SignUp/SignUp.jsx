import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import Lottie from 'lottie-react';
import signUpAnimation from '../../assets/lottie/signup-animation.json';

const SignUp = () => {
    const handleSignup = () =>{

    }
    return (
      <>
        <Helmet>
          <title>Bistro Boss | Sign Up</title>
        </Helmet>
        <div className="hero min-h-[calc(100vh-200px)] bg-base-100">
          <div className="hero-content w-1/2 flex-col md:flex-row shadow-2xl ">
            <Lottie animationData={signUpAnimation}></Lottie>
            <div className="card md:w-1/2 min-w-max max-w-sm bg-base-200 flex-shrink-0">
              <form
                onSubmit={handleSignup}
                className="card-body pb-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                  />
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

export default SignUp;