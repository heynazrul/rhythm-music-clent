import { MdFactCheck } from 'react-icons/md';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ClassCard = () => {
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl mx-auto group">
      <figure>
        <img
          src="http://notacorda.like-themes.com/wp-content/uploads/2017/10/Class_1-770x440.jpg"
          alt="Shoes"
          className='group-hover:scale-110 transition-all duration-500'
        />
      </figure>
      <div className="card-body p-6 space-y-2">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-primary font-semibold">$65.00</p>
        <p className="text-neutral font-medium">Instructor Name: Dummy Name</p>
        <div className="flex items-center gap-2">
          <MdFactCheck size={18}></MdFactCheck>
          <span>Available Seats: {12} </span>
        </div>

        <div className="card-actions justify-start">
          <Link className="btn btn-sm btn-primary btn-outline ">
            Enroll Now <BiRightArrowAlt></BiRightArrowAlt>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
