import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import ParalaxTestimonial from '../ParalaxTestimonial/ParalaxTestimonial';

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Rhythm | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <ParalaxTestimonial></ParalaxTestimonial>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
