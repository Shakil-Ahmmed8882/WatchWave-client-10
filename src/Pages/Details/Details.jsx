import { useParams } from "react-router-dom";
import useAuth from "../../Utils/AuthHelper";

const Details = () => {
  const { name } = useParams();
  const { brands } = useAuth();

  const searchName = name;

  // Find the object based on the name
  const foundObject = brands.reduce((found, brand) => {
    if (!found) {
      const project = brand.brand.projects[0];
      if (project && project.products) {
        const product = project.products.find(
          (product) => product.Name === searchName
        );
        if (product) {
          found = product;
        }
      }
    }
    return found;
  }, null);

  if (!foundObject) {
    return <p>Loading ...</p>;
  } else {
    console.log("Found Object:", foundObject);
  }


// Function to add to the cart
const handleAddToCart = (e)=>{
      e.preventDefault()
      

}
















  const { Name, Image, Price, Rating, Type } = foundObject;

  return (
    <div className=" bg-gradient-to-r flex h-[80vh] from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg">
      <div className="w-screen h-full dark:bg-gray-700">
        <div className="flex justify-center flex-wrap">
          <div className="border w-full max-w-sm md:w-1/2 lg:w-1/3 mx-3 rounded-lg shadow-lg mt-5 dark:shadow-blue-900">
            <div className="flex flex-col items-center md:items-start px-6 py-4">
              <div className="flex flex-col w-24">
                <h2 className="font-bold text-xl dark:text-gray-100 w-80">
                <h1 className="text-5xl font-bold line-height">{Name.split(' ')[0]}</h1>
                </h2>
                <div className="border- border-red-500 mb-3 text"></div>
              </div>
              <div>
                <h1>{Name}</h1>
                <img src={Image} alt="" />
                <p>Type: {Type}</p>
                <p>Price: {Price}</p>
                <p>Rating: {Rating}</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start line-height bg-gray-100 px-6 py-3 rounded-lg dark:bg-blue-100">
              <h2 className="font-bold text-2xl mb-2 text-black">${Price}/mo</h2>
              <p className="text-sm-light-text">Access to the world of </p>
              <button onClick={(e)=> handleAddToCart(e)} className="bg-blue-600 px-4 py-2 mt-3 rounded font-semibold text-white hover:bg-blue-700">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*=============== */}
    </div>
  );
};

export default Details;
