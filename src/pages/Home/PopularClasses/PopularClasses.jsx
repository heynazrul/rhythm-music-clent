import { Link } from 'react-router-dom';
import ClassCard from '../../../components/PopularClassCard/PopularClassCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from '../../../components/SkeletonLoader/SkeletonLoader';

const PopularClasses = () => {
  const { data: classes = [], isLoading } = useQuery(['classes'], async () => {
    const res = await fetch(`http://localhost:5000/approved-classes`);
    return res.json();
  });
  const [topClasses, setTopClasses] = useState([]);

  useEffect(() => {
    if (classes.length === 0) {
      setTopClasses([]); // Set an empty array if there are no classes
      return; // Exit the function
    }
    // Sort the classes based on the number of students enrolled
    const sortedClasses = [...classes].sort((a, b) => b.enrolled - a.enrolled);

    // Retrieve the top 6 classes
    const topClasses = sortedClasses.slice(0, 6);

    setTopClasses(topClasses);
  }, [classes]);

  console.log(topClasses);
  return (
    <section className="text-center py-20">
      <SectionTitle
        heading={'Featured on this month'}
        subHeading={'popular classes'}></SectionTitle>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6">
        {isLoading ? (
          <>
            <SkeletonLoader></SkeletonLoader>
            <SkeletonLoader></SkeletonLoader>
            <SkeletonLoader></SkeletonLoader>
          </>
        ) : (
          topClasses.map((classInfo) => (
            <ClassCard
              key={classInfo._id}
              classInfo={classInfo}
            />
          ))
        )}
      </div>
      <Link
        to={'/classes'}
        className="btn btn-primary mt-10 w-32">
        See All
      </Link>

      {/* BG animation */}
    </section>
  );
};

export default PopularClasses;
