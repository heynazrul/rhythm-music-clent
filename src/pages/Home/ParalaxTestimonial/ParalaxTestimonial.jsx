import { Parallax } from 'react-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper';

const ParalaxTestimonial = () => {
  const img =
    'https://images.unsplash.com/photo-1567287642372-fe2db1a77d34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
  return (
    <div className="">
      <Parallax
        bgImage={img}
        bgImageStyle={{ objectFit: 'cover', objectPosition: 'center' }}
        strength={600}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <div className="max-w-3xl mx-auto py-40">
              <figure>
                <blockquote>
                  <p className=" text-gray-300 text-xl text-center font-semibold sm:text-2xl">
                    “As an adult learner, I was initially hesitant to pursue music lessons. However, Rhythm Music School
                    made the experience enjoyable and rewarding. The instructors are patient and encouraging, and they
                    tailor the lessons to my goals. It iss never too late to start your musical journey, and Rhythm
                    Music School is the perfect place to do it“
                  </p>
                </blockquote>
                <div className="flex justify-center items-center gap-x-4 mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1546791737-97c81ec08179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className="w-16 h-16 rounded-full object-cover object-center"
                  />
                  <div>
                    <span className="block text-gray-300 font-semibold">Martin escobar</span>
                    <span className="block text-gray-300 text-sm mt-0.5">Founder of meta</span>
                  </div>
                </div>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-3xl mx-auto py-40">
              <figure>
                <blockquote>
                  <p className=" text-gray-300 text-xl text-center font-semibold sm:text-2xl">
                    “Rhythm Music School has exceeded my expectations. The lessons are well-structured, and the
                    instructors personalize their teaching approach to suit my learning style. I have not only improved
                    my technical skills but also gained a deeper appreciation for music. I highly recommend this school
                    to anyone looking to embark on a musical journey.“
                  </p>
                </blockquote>
                <div className="flex justify-center items-center gap-x-4 mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1644345606232-d1340eef07c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
                    className="w-16 h-16 rounded-full object-cover object-center"
                  />
                  <div>
                    <span className="block text-gray-300 font-semibold">Martin escobar</span>
                    <span className="block text-gray-300 text-sm mt-0.5">Founder of meta</span>
                  </div>
                </div>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-3xl mx-auto py-40">
              <figure>
                <blockquote>
                  <p className=" text-gray-300 text-xl text-center font-semibold sm:text-2xl">
                    “I am thrilled with the progress I have made at Rhythm Music School. The teachers are knowledgeable,
                    friendly, and create a supportive learning environment. Whether you arre a beginner or an
                    experienced musician, this school is the perfect place to nurture your musical talent.“
                  </p>
                </blockquote>
                <div className="flex justify-center items-center gap-x-4 mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1565624736233-2ec7a7afbee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    className="w-16 h-16 rounded-full object-cover object-center"
                  />
                  <div>
                    <span className="block text-gray-300 font-semibold">David R.</span>
                    <span className="block text-gray-300 text-sm mt-0.5">Founder of Google</span>
                  </div>
                </div>
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </Parallax>
    </div>
  );
};

export default ParalaxTestimonial;
