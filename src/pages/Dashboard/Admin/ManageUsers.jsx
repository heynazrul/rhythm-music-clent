import { Helmet } from 'react-helmet-async';
import {  FaEnvelope } from 'react-icons/fa';


const ManageUsers = () => {
  return (
    <div className="overflow-x-auto w-full px-4">
      <Helmet>
        <title>Rhythm | Manage Users</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl my-5">Manage Users</h2>
      <table className="table">
        {/* head */}
        <thead className="bg-base-200  uppercase">
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
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>
              <p className="font-bold">Joe Satriani</p>
            </td>
            <td>
              <p className="flex gap-2 items-center font-semibold">
                <FaEnvelope></FaEnvelope>
                <span>demo@demo.com</span>
              </p>
            </td>
            <td>
              <div className="badge badge-accent">Student</div>
            </td>
            <th className="space-x-2">
              <button className="btn btn-secondary btn-sm">Make Instructor</button>
              <button className="btn btn-primary btn-sm">Make Admin</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
