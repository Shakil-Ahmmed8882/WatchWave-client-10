import Banner from "../Components/Banner/Banner";
import Series from "./Series";

// import useAuth from "../Utils/AuthHelper";
// const { name } = useAuth();
const Home = () => {

  return (
    <div>
      <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      </div>
        <Series></Series>
    </div>
  );
};

export default Home;
