import { Link } from "react-router-dom";
import ClassCard from "../../../components/ClassCard/ClassCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularClasses = () => {
    return (
      <section className="text-center">
        <SectionTitle
          heading={'Featured on this month'}
          subHeading={'popular classes'}></SectionTitle>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6">
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
        </div>
          <Link className="btn btn-primary mt-10 w-32">See All</Link>

        {/* BG animation */}
      </section>
    );
};

export default PopularClasses;