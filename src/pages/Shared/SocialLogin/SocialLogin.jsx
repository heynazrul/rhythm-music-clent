import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
     const handleGoogleSignIn = () => {

     }
    return (
      <div>
        <div className="divider">OR</div>
        <div className="w-full text-center my-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline">
            <FcGoogle></FcGoogle>
            <span className="">Continue with google</span>
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;