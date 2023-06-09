
const SectionTitle = ({heading, subHeading}) => {
    return (
      <div className="mx-auto text-center md:w-4/12 my-12">
        <p className="text-primary uppercase font-semibold">{subHeading}</p>
        <h3 className="text-3xl uppercase font-bold py-3">{heading}</h3>
      </div>
    );
};

export default SectionTitle;