import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
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
          <Footer></Footer>
        </div>
    </div>
  );
};

export default Home;
