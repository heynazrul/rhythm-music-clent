import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users');
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`Made ${user.name} an Admin`);
      }
    });
  };

  const handleMakeInstructor = (user) => {
    axiosSecure.patch(`/users/instructor/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`Made ${user.name} an Instructor`);
      }
    });

    // fetch(`https://rhythm-music-server.vercel.app/users/instructor/${user._id}`, {
    //   method: 'PATCH',
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount) {
    //       refetch();
    //       toast.success(`Made ${user.name} an Instructor`);
    //     }
    //   });
  };

  return (
    <div className="overflow-x-auto w-full px-4">
      <Helmet>
        <title>Rhythm | Manage Users</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl my-5">Manage Users</h2>
      <table className="table">
        {/* head */}
        <thead className="bg-base-200 uppercase">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user._id}>
              <th>{idx + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={
                        user.photoURL
                          ? user.photoURL
                          : 'https://www.belizeplanners.org/wp-content/uploads/2016/01/male-placeholder.jpg'
                      }
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <p className="font-bold">{user.name}</p>
              </td>
              <td>
                <p className="flex gap-2 items-center font-semibold">
                  <FaEnvelope></FaEnvelope>
                  <span>{user.email}</span>
                </p>
              </td>
              <td>
                <div
                  className={`badge ${
                    (user.role === 'admin' && 'badge-primary') ||
                    (user.role === 'instructor' && 'badge-secondary') ||
                    (user.role === 'student' && 'badge-accent')
                  }`}>
                  {user.role}
                </div>
              </td>
              <th className="space-x-2">
                <button
                  onClick={() => handleMakeInstructor(user)}
                  disabled={user.role === 'instructor' && true}
                  className="btn btn-secondary btn-sm">
                  Make Instructor
                </button>
                <button
                  onClick={() => handleMakeAdmin(user)}
                  disabled={user.role === 'admin' && true}
                  className="btn btn-primary btn-sm">
                  Make Admin
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
