import { FaEnvelope } from 'react-icons/fa';
import { MdOutlinePlayLesson } from 'react-icons/md';

const InstructorCard = ({instructor}) => {
  console.log(instructor);
  return (
    <div className="card card-compact group mx-auto min-w-max max-w-sm bg-base-100 shadow-lg overflow-hidden w-full">
      <figure>
        <img
          src={
            instructor?.photoURL
              ? instructor?.photoURL
              : 'https://www.belizeplanners.org/wp-content/uploads/2016/01/male-placeholder.jpg'
          }
          alt="Shoes"
          className="w-full h-56 object-cover object-center transition-all duration-500 group-hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{instructor.name}</h2>
        <div className="flex gap-2 items-center">
          <FaEnvelope></FaEnvelope>
          <p>demo@demo.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlinePlayLesson></MdOutlinePlayLesson>
          <p>Number of Classes: 13</p>
        </div>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-sm btn-block btn-primary">See Classes</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
