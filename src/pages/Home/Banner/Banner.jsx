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
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="h-[calc(100vh-300px)] md:h-[calc(100vh-200px)] relative">
        <SwiperSlide>
          <div className="bg-black bg-opacity-50 h-full w-full absolute z-10"></div>
          <img
            className="h-full w-full object-cover object-center custom-animation "
            src={slide1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black bg-opacity-50 h-full w-full absolute z-10"></div>
          <img
            className="h-full w-full object-cover object-center custom-animation"
            src={slide2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black bg-opacity-50 h-full w-full absolute z-10"></div>
          <img
            className="h-full w-full object-cover object-center custom-animation"
            src={slide3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black bg-opacity-50 h-full w-full absolute z-10"></div>
          <img
            className="h-full w-full object-cover object-center custom-animation"
            src={slide4}
            alt=""
          />
        </SwiperSlide>

        {/* Banner title */}
        <div
          id="banner-title"
          className=" w-2/3 md:w-1/2  z-20 text-center space-y-3">
          <h2 className="text-2xl md:text-3xl lg:text-5xl text-base-100 font-bold text-center h-24">
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
          <Link to={'/classes'} className="btn btn-primary btn-xs md:btn-sm lg:btn-md  ">Enroll Now!</Link>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
