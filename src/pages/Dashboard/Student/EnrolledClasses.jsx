import { Helmet } from 'react-helmet-async';
import { FaEnvelope } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [] } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get(`https://rhythm-music-server.vercel.app/student/enrolled-classes/${user.email}`);
    return res.data;
  });
  return (
    <div className="overflow-x-auto w-full px-4">
      <Helmet>
        <title>Rhythm | My Enrolled Classes</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl my-5">My Enrolled Classes</h2>
      <table className="table">
        {/* head */}
        <thead className="bg-base-200  uppercase">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Class Name</th>
            <th>Instructor</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((item, idx) => (
            <tr key={item.key}>
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
                      alt="Avatar Tailwind CSS Component"
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
                <p className=" font-semibold">${item.price}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClasses;
