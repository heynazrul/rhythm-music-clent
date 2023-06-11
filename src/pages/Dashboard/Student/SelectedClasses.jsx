import { Helmet } from "react-helmet-async";
import { FaEnvelope } from "react-icons/fa";
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { MdError } from "react-icons/md";


const SelectedClasses = () => {
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
                <p className="font-semibold">Dummy inst Name</p>
                <p className="flex gap-2 items-center">
                  <FaEnvelope></FaEnvelope>
                  <span>demo@demo.com</span>
                </p>
              </td>
              <td>
                <p>20</p>
              </td>
              <td>
                <p className="text-center font-semibold">${120}</p>
              </td>
              <td>
                <div className="badge badge-ghost">pending</div>
              </td>
              <th className="space-x-2">
                <button className="btn btn-info btn-sm">
                  <BsFillCreditCard2BackFill></BsFillCreditCard2BackFill> Pay
                </button>
                <button className="btn btn-error btn-sm">
                  <MdError></MdError> Delete
                </button>
                
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default SelectedClasses;