import { Helmet } from 'react-helmet-async';

const MyClasses = () => {
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
              <p className="font-bold">Guitar shedding 1010</p>
            </td>

            <td>
              <p className="font-semibold">20</p>
            </td>
            <td>
              <p className="font-semibold">${120}</p>
            </td>
            <td>
              <div className="badge badge-ghost">pending</div>
            </td>
            <td>
              <p className="font-semibold">20</p>
            </td>
            <td>
              <p className="">N/A</p>
            </td>
            <th className="space-x-2">
              <button className="btn btn-accent btn-xs">Update</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
