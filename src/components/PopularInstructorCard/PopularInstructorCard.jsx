import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InstructorCard = ({ instructor }) => {
  const title = [
    'Music Instructor',
    'Instrumental Instructor',
    'Vocal Instructor',
    'Guitar Instructor',
    'Piano Instructor',
    'Drum Instructor',
    'Violin Instructor',
    'Voice Coach',
    'Music Teacher',
    'Private Music Instructor',
  ];
  const randomIndex = Math.floor(Math.random() * title.length);

  return (
    <div className="hover:cursor-pointer group ">
      {/* TODO: add group hover */}
      <div className="w-44 h-44 mx-auto border border-secondary group-hover:border-8 rounded-full group-hover:p-0 p-2 duration-300 overflow-clip transition-all ">
        <img
          src={
            instructor?.photoURL
              ? instructor?.photoURL
              : 'https://www.belizeplanners.org/wp-content/uploads/2016/01/male-placeholder.jpg'
          }
          className="w-full h-full object-cover object-center rounded-full "
          alt=""
        />
      </div>
      <div className="mt-2 text-center">
        <h4 className=" font-bold md:text-xl">{instructor.name ? instructor.name : 'Name not available'}</h4>
        <p className="text-primary-focus hover:text-secondary-focus">{title[randomIndex]}</p>
        <div className="mt-4 flex justify-center gap-4">
          <Link to={'/#'}>
            <FaLinkedin></FaLinkedin>
          </Link>
          <Link to={'/#'}>
            <FaFacebook></FaFacebook>
          </Link>
          <Link to={'/#'}>
            <FaYoutube></FaYoutube>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;

{
  /* <Link to={'/#'}>
            <FaLinkedin></FaLinkedin>
          </Link>
          <Link to={'/#'}>
            <FaFacebook></FaFacebook>
          </Link>
          <Link to={'/#'}>
            <FaYoutube></FaYoutube>
          </Link> */
}
