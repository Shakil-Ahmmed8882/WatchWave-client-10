import { useLoaderData } from "react-router-dom";

const Projects = () => {
  const brandData = useLoaderData();
  const brand = brandData.brand;
  // const {advertisementImages} = brand.fantasy[0]
  // const {products} = brand.fantasy[0]

  return (
    <div>
      <h1>
        projects {brandData.brand.genreName}
        <img src={brandData.brand.BImg} alt="" />
      </h1>
    </div>
  );
};

export default Projects;
