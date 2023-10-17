import useAuth from "../Utils/AuthHelper";

const Home = () => {
  const { name } = useAuth();

  return (
    <div>
      <h1>Home {name}</h1>
    </div>
  );
};

export default Home;
