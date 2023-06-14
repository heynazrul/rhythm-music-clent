import { useNavigate } from 'react-router-dom';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const useEnroll = () => {
  const navigate = useNavigate();

  const [axiosSecure] = useAxiosSecure();

  const { user } = useAuth();

  const handleEnroll = (item) => {
    if (!user) {
      Swal.fire({
        title: 'Login First!',
        text: 'To enroll you have to login first',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login now!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }

    axiosSecure.patch(`/users/selectedClassId/${user?.email}`, { classId: item._id }).then((res) => {
      if (!user?.email) {
        return;
      }
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success(`Added to selected class`);
      }
      if (res.data.modifiedCount === 0) {
        toast.error(`Already added to selected class`);
      }
    });
  };

  return {handleEnroll};
};

export default useEnroll;
