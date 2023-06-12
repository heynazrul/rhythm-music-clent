import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import { MdError, MdFeedback } from 'react-icons/md';
import useClass from '../../../hooks/useClass';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageClasses = () => {
  const [classes, , refetch] = useClass();

  const [axiosSecure] = useAxiosSecure();

  const handleApprove = (item) => {
    axiosSecure.patch(`/classes/approved/${item._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`${item.name} is Approved!`);
      }
    });
  };

  const handleDeny = (item) => {
    axiosSecure.patch(`/classes/denied/${item._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.error(`${item.name} is Denied!`);
      }
    });
  };

  
  const handleFeedback = async (item) => {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
    });

    if (text) {
      console.log(text);
      Swal.fire(text);
    }
  };

  return (
    <div className="overflow-x-auto w-full px-4">
      <Helmet>
        <title>Rhythm | Manage Classes</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl my-5">Manage Classes</h2>
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
                <p>{item.seats}</p>
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
                <button
                  onClick={() => handleApprove(item)}
                  disabled={(item.status === 'approved' && true) || (item.status === 'denied' && true)}
                  className="btn btn-success btn-xs">
                  <FaCheckCircle></FaCheckCircle> Approve
                </button>
                <button
                  onClick={() => handleDeny(item)}
                  disabled={(item.status === 'approved' && true) || (item.status === 'denied' && true)}
                  className="btn btn-error btn-xs">
                  <MdError></MdError> Deny
                </button>
                <button
                  onClick={() => handleFeedback(item)}
                  className="btn btn-info btn-xs">
                  <MdFeedback></MdFeedback> Feedback
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* Open the modal using ID.showModal() method */}

        {/* <dialog
          id="my_modal_1"
          className="modal">
          <form
            method="dialog"
            className="modal-box">
            <h3 className="font-bold text-base-content text-lg mb-3">Share Feedback</h3>
            <input
              type="text"
              placeholder="Write your feedback...."
              className="input input-bordered w-full text-base-content max-w-md"
            />
            <div className="modal-action">
    
              <button onClick={() => {handleFeedback}} className="btn btn-neutral btn-sm">Send Feedback</button>
            </div>
          </form>
        </dialog> */}
      </table>
    </div>
  );
};

export default ManageClasses;
