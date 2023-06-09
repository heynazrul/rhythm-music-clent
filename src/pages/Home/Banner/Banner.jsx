import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Typewriter from 'typewriter-effect';

import './Banner.css';
import slide1 from '../../../assets/banner/SLIDE1.jpg';
import slide2 from '../../../assets/banner/SLIDE2.jpg';
import slide3 from '../../../assets/banner/SLIDE3.jpg';
import slide4 from '../../../assets/banner/SLIDE4.jpg';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="max-h-[calc(100vh-200px)] relative">
        <SwiperSlide>
          <div className="bg-black bg-opacity-50 h-full w-full absolute z-10"></div>
          <img
            className="object-cover object-center custom-animation "
            src={slide1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black bg-opacity-50 h-full w-full absolute z-10"></div>
          <img
            className="object-cover object-center custom-animation"
            src={slide2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black bg-opacity-50 h-full w-full absolute z-10"></div>
          <img
            className="w-full custom-animation"
            src={slide3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black bg-opacity-50 h-full w-full absolute z-10"></div>
          <img
            className="object-cover object-center custom-animation"
            src={slide4}
            alt=""
          />
        </SwiperSlide>

        {/* Banner title */}
        <div className="absolute w-1/2 left-1/3 top-1/3 z-20 text-center space-y-3">
          <h2 className="text-5xl text-base-100 font-bold text-center h-24">
            <Typewriter
              options={{
                strings: [
                  'Riffs & Chords: Master the Guitar this Summer',
                  'Instrumental Journey: Elevate Your Summer with Music',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-base-200 ">
            Experience the thrill of guitar mastery at our summer camp. Learn riffs, chords, and techniques while
            unleashing your musical potential. Rock the stage with confidence and create lasting memories.
          </p>
          <Link className="btn btn-primary ">Enroll Now!</Link>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
