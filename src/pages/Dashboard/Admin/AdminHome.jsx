import { RiListSettingsFill } from 'react-icons/ri';
import useClass from '../../../hooks/useClass';
import { FaCheck } from 'react-icons/fa';

const AdminHome = () => {
  const [classes] = useClass();
  const pendingClasses = classes.filter((classObj) => classObj.status === 'pending');
  const totalPendingClasses = pendingClasses.length;

  const approvedClasses = classes.filter((classObj) => classObj.status === 'approved');
  const totalApprovedClasses = approvedClasses.length;
  const deniedClasses = classes.filter((classObj) => classObj.status === 'denied');
  const totalDeniedClasses = deniedClasses.length;
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-warning">
              <RiListSettingsFill></RiListSettingsFill>
            </div>
            <div className="stat-title">Total Pending Class</div>
            <div className="stat-value text-warning">{totalPendingClasses}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-info">
              <FaCheck></FaCheck>
            </div>
            <div className="stat-title">Total Approved Classes</div>
            <div className="stat-value text-info">{totalApprovedClasses}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-error">
              <FaCheck></FaCheck>
            </div>
            <div className="stat-title">Total Denied Classes</div>
            <div className="stat-value text-error">{totalDeniedClasses}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
