import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import LocationInfo from "../Components/Our-Location/Location";
import ImageGrid from "./Actors";
import Series from "./Series";

// import useAuth from "../Utils/AuthHelper";
// const { name } = useAuth();
const Home = () => {

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      </div>
        <Series></Series>
        <div>
          <ImageGrid></ImageGrid>
        </div>
        <div>
          <LocationInfo></LocationInfo>
        </div>
        <div>
          <Footer></Footer>
        </div>
    </div>
  );
};

export default Home;
