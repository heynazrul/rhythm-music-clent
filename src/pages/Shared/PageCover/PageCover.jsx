import { Parallax } from "react-parallax";


const PageCover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      bgImageSizes="cover"
      strength={-200}>
      <div className="hero py-16">
        <div className="hero-content text-center text-neutral-content bg-neutral py-16 w-2/3 bg-opacity-80">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
            <p className="uppercase mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default PageCover;