import PopularInstructorCard from '../../../components/PopularInstructorCard/PopularInstructorCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PopularInstructors = () => {
  return (
    <section>
      <SectionTitle
        heading={'Meet our instructors'}
        subHeading={'Skilled Instructors'}></SectionTitle>
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 ">
        <PopularInstructorCard></PopularInstructorCard>
        <PopularInstructorCard></PopularInstructorCard>
        <PopularInstructorCard></PopularInstructorCard>
        <PopularInstructorCard></PopularInstructorCard>
        <PopularInstructorCard></PopularInstructorCard>
        <PopularInstructorCard></PopularInstructorCard>
      </div>
    </section>
  );
};

export default PopularInstructors;
