import Marquee from "react-fast-marquee";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";

const Projects = () => {
  const brandData = useLoaderData();
  const navigate = useNavigate()
  const brand = brandData.brand;
  // const {advertisementImages} = brand.fantasy[0]
  const products = brand?.projects[0]?.products;
  // console.log(brand)
  // console.log(advertisementImages)
  const advertisementImages = [
    "https://th.bing.com/th/id/OIP.vY4Tb1g5nojyL8GyX-mplAHaEK?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.HZB9lVSOWtWPrlm-dcBBKAHaE7?pid=ImgDet&rs=1",
    "https://lehren.com/wp-content/uploads/2023/03/most-viewed-netflix-tv-shows.jpg",
    "https://th.bing.com/th/id/OIP.HZB9lVSOWtWPrlm-dcBBKAHaE7?pid=ImgDet&rs=1",
  ];


  // handle project
  console.log()
  const handleDetails = (e,name) =>{
    e.preventDefault()
    navigate(`/project/${name}`)
  }


  const handleUpdate = (name) =>{
    navigate(`/update/${name}`)
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
      <div className="flex justify-center flex-col items-center pt-20">
      <h1 className="text-9xl font-bold text-center w-32 h-32 bg-indigo-200 p-7 rounded-full"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/b6/ad/61/b6ad617a-0024-3066-179f-8c7d848f4de2/source/512x512bb.jpg" alt="" /></h1>
      <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl bottom-mark md:w-[500px] md:mx-auto">
            WatchWave Cinema
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            WatchWave is your one-stop destination for streaming the latest
            movies and dramas, just like Netflix. We offer a wide selection of
            content.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 px-3">
        {products?.map((product, idx) => (
          <div key={idx} className={`cursor-pointer shadow-xl pb-2`}>
            <img className="h-[150px] w-full object-cover rounded-t-lg" src={advertisementImages[idx]} alt="" />
            <div className={` py-3 px-3 space-y-2 flex flex-col justify-around`} key={idx}>
              <h1 className="text-[22px]">name: {product.Name}</h1>
              {/* <p>{}</p> */}

              <p>Type: {product.Type}</p>
              <p>Price:{product.Price}</p>
              <div className="flex items-center gap-3">
                <p>{product.Rating}</p>
                <ReactStarsRating
                  className="flex"
                  value={product.Rating}></ReactStarsRating>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={()=>handleUpdate(product.Name)} className=" p-2 text-[15px] w-full border-none outline-none active:scale-95 transition-all bg-indigo-500 hover:bg-indigo-700 text-white">Update</button>
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
