import { MdFactCheck } from 'react-icons/md';
import { BiRightArrowAlt } from 'react-icons/bi';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const ClassCard = ({ item }) => {
  const { img, name, instructorName, price, seats } = item;
  const navigate = useNavigate();

  const [axiosSecure] = useAxiosSecure();

  const { user } = useAuth();

  // const { data: users = [], refetch } = useQuery(['users'], async () => {
  //   const res = await fetch('http://localhost:5000/users/check-role');
  //   return res.json();
  // });

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

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

    axiosSecure.patch(`/users/selectedClassId/${user.email}`, { classId: item._id }).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success(`Added to selected class`);
      }
      if (res.data.modifiedCount === 0) {
        toast.error(`Already added to selected class`);
      }
    });
  };
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl mx-auto group">
      <figure>
        <img
          src={
            img
              ? img
              : 'https://mobilemusiclessons.ca/wp-content/webpc-passthru.php?src=https://mobilemusiclessons.ca/wp-content/uploads/2021/09/no-image-650x433.jpg&nocache=1.webp'
          }
          alt={name}
          className="group-hover:scale-110 h-64 transition-all duration-500 object-cover object-center"
        />
      </figure>
      <div className="card-body p-6 space-y-2">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-primary font-semibold">${price ? price : 'N/A'}</p>
        <p className="text-neutral font-medium">
          Instructor Name: <span className="font-semibold">{instructorName}</span>
        </p>
        <div className="flex items-center gap-2">
          <MdFactCheck size={18}></MdFactCheck>
          <span>Available Seats: {seats} </span>
        </div>

        <div className="card-actions justify-start">
          <button
            onClick={() => handleEnroll(item)}
            disabled={isAdmin || isInstructor}
            className="btn btn-sm btn-primary btn-outline ">
            Enroll Now <BiRightArrowAlt></BiRightArrowAlt>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
