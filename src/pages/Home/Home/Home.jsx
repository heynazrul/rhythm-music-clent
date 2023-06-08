import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
      <div className="bg-red-400 max-w-7xl mx-auto">
        <Helmet>
          <title>Rhythm | Home</title>
        </Helmet>
        <h2>Home component</h2>
        <button className="btn btn-primary">Hello</button>
        <button className="btn btn-secondary ml-2">Hello</button>

       
      </div>
    );
};

export default Home;