import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {
  // const [classes, , refetch] = useClass();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get(`http://localhost:5000/instructor/my-classes/${user.email}`);
    return res.data;
    // return res.json();
  });
  console.log(classes);
  return (
    <div className="overflow-x-auto w-full px-4">
      <Helmet>
        <title>Rhythm | My Classes</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl my-5">My Classes</h2>
      <table className="table">
        {/* head */}
        <thead className="bg-base-200  uppercase">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Class Name</th>
            <th>Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Total Enrolled</th>
            <th>Feedback</th>
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
                    />
                  </div>
                </div>
              </td>
              <td>
                <p className="font-bold">{item.name}</p>
              </td>
              <td>
                <p className="font-semibold">{item.seats}</p>
              </td>
              <td>
                <p className="font-semibold">${item.price}</p>
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
              <td>
                <p className="font-semibold">{item.enrolled}</p>
              </td>
              <td>
                <p className="">
                  {item.status === 'pending' || item.status === 'approved'
                    ? 'Not applicable'
                    : item?.feedback
                    ? item.feedback
                    : 'N/A'}
                </p>
              </td>
              <th className="space-x-2">
                <Link
                  to={'/update-class'}
                  className="btn btn-accent btn-xs">
                  Update
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
