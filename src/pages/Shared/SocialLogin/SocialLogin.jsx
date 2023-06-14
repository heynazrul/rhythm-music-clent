import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    const toastPromise = toast.loading('Please wait registering...');
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        toast.update(toastPromise, {
          render: 'Logged in Successfully!',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
          closeOnClick: true,
        });
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photoURL: loggedInUser.photoURL,
          role: 'student',
          selectedClassId: [],
        };
        fetch('https://rhythm-music-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              toast.update(toastPromise, {
                render: 'Added to Database',
                type: 'success',
                isLoading: false,
                autoClose: 2000,
                closeOnClick: true,
              });
            }
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message.split('/')[1].split(')')[0];
        // toast.error(message);
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
    <div className="px-8">
      <div className="divider">OR</div>
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-block">
          <FcGoogle size={20}></FcGoogle>
          <span className="">Continue with google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
