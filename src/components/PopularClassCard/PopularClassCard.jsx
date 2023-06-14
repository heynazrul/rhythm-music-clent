import { LuUsers } from 'react-icons/lu';
import { RiFileList2Line } from 'react-icons/ri';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

import useEnroll from '../../hooks/useEnroll';

const ClassCard = ({ classInfo }) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const { handleEnroll } = useEnroll();


  return (
    <div className="card w-full sm:max-w-96 bg-base-100 shadow-xl mx-auto group">
      <figure className="h-64">
        <img
          src={
            classInfo.img
              ? classInfo.img
              : 'https://mobilemusiclessons.ca/wp-content/webpc-passthru.php?src=https://mobilemusiclessons.ca/wp-content/uploads/2021/09/no-image-650x433.jpg&nocache=1.webp'
          }
          className="group-hover:scale-110 h-full w-full transition-all duration-500 object-cover object-center"
        />
      </figure>
      <div className="card-body p-6 space-y-2 justify-between">
        <div className="flex justify-between items-center">
          <div className="avatar items-center gap-2">
            <div className="w-12 rounded-full">
              <img
                src={
                  classInfo?.instructorImg
                    ? classInfo?.instructorImg
                    : 'https://www.belizeplanners.org/wp-content/uploads/2016/01/male-placeholder.jpg'
                }
                alt={classInfo.name}
              />
            </div>
            <p className="text-neutral font-medium">{classInfo.instructorName}</p>
          </div>
          <div>
            <p className="text-primary font-semibold">${classInfo.price}</p>
          </div>
        </div>
        <h2 className="card-title text-start">
          {classInfo.name}
          <div
            className={`badge ${
              (classInfo.enrolled > 10 && 'badge-primary') ||
              (classInfo.enrolled > 5 && 'badge-warning') ||
              'badge-info'
            } `}>
            {(classInfo.enrolled > 10 && 'Popular') || (classInfo.enrolled > 5 && 'Hot') || 'New'}
          </div>
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LuUsers size={18}></LuUsers>
            <span>{classInfo.enrolled} Students</span>
          </div>
          <div className="flex items-center gap-2">
            <RiFileList2Line size={18}></RiFileList2Line>
            <span>{Math.floor(Math.random() * 51)} Lessons</span>
          </div>
        </div>
        <div className="card-actions card justify-start">
          <Link
            onClick={() => handleEnroll(classInfo)}
            disabled={isAdmin || isInstructor}
            className="btn btn-sm btn-primary btn-outline ">
            Enroll Now <BiRightArrowAlt></BiRightArrowAlt>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
