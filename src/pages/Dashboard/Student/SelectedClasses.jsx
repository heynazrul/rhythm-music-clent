import { Helmet } from 'react-helmet-async';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { MdError } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const SelectedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get(`/users/selectedClassId/${user.email}`);
    return res.data;
    // return res.json();
  });

  console.log(classes);

  const handleDelete = async (item) => {
    const res = await axiosSecure.delete(`/users/selectedClassId/${user.email}/${item._id}`);
    if (res.data.modifiedCount) {
      refetch();
      toast.success(`${item.name} removed from your wish list`);
    }
  };

  return (
    <div className="overflow-x-auto w-full px-4">
      <Helmet>
        <title>Rhythm | My Selected Classes</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl my-5">My Selected Classes</h2>
      <table className="table">
        {/* head */}
        <thead className="bg-base-200  uppercase">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Class Name</th>
            <th>Instructor</th>
            <th>Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((item, idx) => (
            <tr key={item._id}>
              <th>{idx + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={
                        item.img
                          ? item.img
                          : 'https://mobilemusiclessons.ca/wp-content/webpc-passthru.php?src=https://mobilemusiclessons.ca/wp-content/uploads/2021/09/no-image-650x433.jpg&nocache=1.webp'
                      }
                      alt={item.name}
                    />
                  </div>
                </div>
              </td>
              <td>
                <p className="font-bold">{item.name}</p>
              </td>
              <td>
                <p className="font-semibold">{item.instructorName}</p>
                <p className="flex gap-2 items-center">
                  <FaEnvelope></FaEnvelope>
                  <span>{item.email}</span>
                </p>
              </td>
              <td>
                <p className="font-semibold">{item.seats}</p>
              </td>
              <td>
                <p className="text-center font-semibold">${item.price}</p>
              </td>
              <td>
                <div
                  className={`badge ${
                    (item.status === 'pending' && 'badge-secondary') ||
                    (item.status === 'approved' && 'badge-success') ||
                    (item.status === 'denied' && 'badge-error')
                  }`}>
                  {item.status}
                </div>
              </td>
              <th className="space-x-2">
                <Link
                  to={'/dashboard/payment'}
                  state={{ item: item }}>
                  <button className="btn btn-info btn-sm">
                    <BsFillCreditCard2BackFill></BsFillCreditCard2BackFill> Pay
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-error btn-sm">
                  <MdError></MdError> Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClasses;
