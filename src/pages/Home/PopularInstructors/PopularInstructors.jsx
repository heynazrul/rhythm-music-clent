import { useQuery } from '@tanstack/react-query';
import PopularInstructorCard from '../../../components/PopularInstructorCard/PopularInstructorCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import instructorBG from '../../../assets/home-bg.jpg'

const PopularInstructors = () => {
  const { data: instructorsData = [], isLoading } = useQuery(['instructors'], async () => {
    const res = await fetch(`http://localhost:5000/instructors`);
    return res.json();
  });

  const instructors = instructorsData?.slice(0, 6);
  return (
    <section className="bg-[url('https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/home-one-service-2.jpg')] py-20">
      <SectionTitle
        heading={'Meet our instructors'}
        subHeading={'Skilled Instructors'}></SectionTitle>
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 ">
        {instructors.map((instructor) => (
          <PopularInstructorCard
            key={instructor._id}
            instructor={instructor}></PopularInstructorCard>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
