import { LuUsers } from 'react-icons/lu';
import { RiFileList2Line } from 'react-icons/ri';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ClassCard = ({ img, name, level }) => {
  return (
    
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img
            src="http://notacorda.like-themes.com/wp-content/uploads/2017/10/Class_1-770x440.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-6 space-y-2">
          <div className="flex justify-between items-center">
            <div className="avatar items-center gap-2">
              <div className="w-12 rounded-full">
                <img
                  src="https://randomuser.me/api/portraits/women/51.jpg"
                  alt=""
                />
              </div>
              <p className="text-neutral font-medium">Dummy Name</p>
            </div>
            <div>
              <p className="text-primary font-semibold">$65.00</p>
            </div>
          </div>
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-2">
              <LuUsers size={18}></LuUsers>
              <span>{36} Students</span>
            </div>
            <div className="flex items-center gap-2">
              <RiFileList2Line size={18}></RiFileList2Line>
              <span>{12} Lessons</span>
            </div>
          </div>
          <div className="card-actions justify-start">
            <Link className="btn btn-sm btn-primary btn-outline ">Enroll Now <BiRightArrowAlt></BiRightArrowAlt></Link>
           
          </div>
        </div>
      </div>

  );
};

export default ClassCard;
