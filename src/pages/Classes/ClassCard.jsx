import { MdFactCheck } from 'react-icons/md';
import { BiRightArrowAlt } from 'react-icons/bi';
import useEnroll from '../../hooks/useEnroll';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const ClassCard = ({ item }) => {
  const { img, name, instructorName, price, seats } = item;

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const { handleEnroll } = useEnroll();

  return (
    <div className="card max-w-96 bg-base-100 shadow-xl mx-auto group">
      <figure className="h-64">
        <img
          src={
            img
              ? img
              : 'https://mobilemusiclessons.ca/wp-content/webpc-passthru.php?src=https://mobilemusiclessons.ca/wp-content/uploads/2021/09/no-image-650x433.jpg&nocache=1.webp'
          }
          alt={name}
          className="group-hover:scale-110 h-full w-full transition-all duration-500 object-cover object-center"
        />
      </figure>
      <div className="card-body p-6 space-y-2">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-primary font-semibold">${price ? price : 'N/A'}</p>
        <p className="text-neutral font-medium">
          Instructor Name: <span className="font-semibold">{instructorName}</span>
        </p>
        <div className="flex items-center gap-2">
          <MdFactCheck size={18}></MdFactCheck>
          <span>Available Seats: {seats} </span>
        </div>

        <div className="card-actions justify-start">
          <button
            onClick={() => handleEnroll(item)}
            disabled={isAdmin || isInstructor}
            className="btn btn-sm btn-primary btn-outline ">
            Enroll Now <BiRightArrowAlt></BiRightArrowAlt>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
