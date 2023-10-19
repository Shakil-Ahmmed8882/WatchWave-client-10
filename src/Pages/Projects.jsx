import Marquee from "react-fast-marquee";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";

const Projects = () => {
  const navigate = useNavigate()
  const brandData = useLoaderData();
  const brand = brandData.brand;
  // const {advertisementImages} = brand.fantasy[0]
  const products = brand.projects[0].products;
  // console.log(advertisementImages)
  const advertisementImages = [
    "https://th.bing.com/th/id/OIP.vY4Tb1g5nojyL8GyX-mplAHaEK?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.HZB9lVSOWtWPrlm-dcBBKAHaE7?pid=ImgDet&rs=1",
    "https://lehren.com/wp-content/uploads/2023/03/most-viewed-netflix-tv-shows.jpg",
    "https://th.bing.com/th/id/OIP.HZB9lVSOWtWPrlm-dcBBKAHaE7?pid=ImgDet&rs=1",
  ];



  // handle project
  const handleDetails = (e,name) =>{
    e.preventDefault()

    navigate(`/project/${name}`)
    
  }

  return (
    <div>
      <div className="project-cover">
        <h1>projects {brandData.brand.genreName}</h1>
      </div>
      <Marquee speed={40} className="cursor-pointer ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {advertisementImages?.map((img, idx) => (
            <img className="w-full object-cover h-60" key={idx} src={img} />
          ))}
        </div>
      </Marquee>
      <h1 className="text-9xl font-bold text-center">Watch</h1>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 px-3">
        {products?.map((product, idx) => (
          <div key={idx} className={`cursor-pointer shadow-xl pb-2`}>
            <img className="h-[150px] w-full object-cover rounded-t-lg" src={advertisementImages[idx]} alt="" />
            <div className={` py-3 px-3 space-y-2 flex flex-col justify-around`} key={idx}>
              <h1 className="text-[22px]">name: {product.Name}</h1>
              {/* <p>{}</p> */}

              <p>Type: {product.Type}</p>
              <p>Price:{product.Price}</p>
              <div className="flex">
                <p>{product.Rating}</p>
                <ReactStarsRating
                  className="flex"
                  value={product.Rating}></ReactStarsRating>
              </div>
              <div className="flex gap-3 pt-2">
                <button className=" p-2 text-[15px] w-full border-none outline-none active:scale-95 transition-all bg-indigo-500 hover:bg-indigo-700 text-white">Update</button>
                <button onClick={(event)=>handleDetails(event,product.Name)} className=" p-2 w-full active:scale-95 transition-all bg-indigo-500 hover:bg-indigo-700 text-[15px] border-none outline-none text-white">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
