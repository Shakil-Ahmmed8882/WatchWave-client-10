import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import LocationInfo from "../Components/Our-Location/Location";
import PricingCard from "../Components/Subcription/Subcription";
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
