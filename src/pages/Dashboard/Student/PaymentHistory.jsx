import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  // TODO: Check why showing data initially from enrolled class when click selected class
  const { data: payments = [] } = useQuery(['payments'], async () => {
    const res = await axiosSecure.get(`/student/payment-history/${user.email}`);
    return res.data;
  });

  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);

    const dateFormatter = new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    });

    const formattedDate = dateFormatter.format(dateTime);

    return formattedDate;
  };

  const formatTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);

    const timeFormatter = new Intl.DateTimeFormat('en', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    const formattedTime = timeFormatter.format(dateTime);
    return formattedTime;
  };

  return (
    <div className="overflow-x-auto w-full px-4 my-12">
      <Helmet>
        <title>Rhythm | Payment History</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl my-5">Payment History</h2>
      <table className="table">
        {/* head */}
        <thead className="bg-base-200  uppercase">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Class Name</th>
            <th>Paid Amount</th>
            <th>Trax ID</th>
            <th>Payment Date</th>
            <th>Payment Time</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((item, idx) => (
            <tr key={item._id}>
              <th>{idx + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={
                        item?.classImg
                          ? item.classImg
                          : 'https://mobilemusiclessons.ca/wp-content/webpc-passthru.php?src=https://mobilemusiclessons.ca/wp-content/uploads/2021/09/no-image-650x433.jpg&nocache=1.webp'
                      }
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <p className="font-bold">{item?.className ? item?.className : 'Unknown'}</p>
              </td>
              <td>
                <p className=" font-semibold">${item.price}</p>
              </td>
              <td>
                <p className=" font-normal">{item.transactionId}</p>
              </td>
              <td>
                <p className=" font-semibold">{formatDate(item.date)}</p>
              </td>
              <td>
                <p className=" font-semibold">{formatTime(item.date)}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
