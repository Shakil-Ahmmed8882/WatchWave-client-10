import { useNavigate } from "react-router-dom";
import useAuth from "../Utils/AuthHelper";

const Series = () => {
  const { loading, brands } = useAuth();
  const navigate = useNavigate();
  const array = Object.values(brands);

  if (loading) {
    return <p>Loading....</p>;
  }

  //Image for testing
  const imgs =
    "https://th.bing.com/th/id/R.35fe07063a8599f1fb44959bf9d2423d?rik=O4VQ2mjjntcajQ&pid=ImgRaw&r=0";

  const calculatedGridClass = (idx, num) => {
    const x =
      idx == num ? "row-span-1 md:row-span-1 col-span-1 md:col-span-2" : "";
    return x;
  };
  //handling projects
  const handleProject = (_id) => {
    navigate(`/brand/${_id}`);
  };
  return (
    <div className="bg-black">
      <div className="flex series-cover py-11 flex-col-reverse md:flex-row md:h-[70vh] items-center w-full bg-black p-3 text-white">
        <div className="flex-1 relative space-y-4 md:ml-5 py-8  md:py-0">
          <h1 className="underline-style text-[20px] text-blue-300 sm:text-3xl md:text-6xl mb-2">
            RIVERDALE
          </h1>
          <div className="flex gap-3 items-center">
            <p className="text-[13px] md:text-[15px]">2023</p>
            <button className="bg-gray-600 p-1 px-2 text-[9px] md:text-[11px] rounded">
              18+
            </button>
            <span className="text-[13px] md:text-[15px]">5 seassion</span>
            <span className="border p-[3px] px-2 rounded text-[9px] md:text-[11px]">
              HD
            </span>
          </div>
          <h2>New Episod coming on Thursday</h2>
          <p className="text-sm-light-text pr-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            assumenda cum aperiam cumque eatae?
          </p>
          <div className="space-x-5 pt-3">
            <button className="bg-indigo-500 hover:bg-indigo-700 transition-all rounded-full px-20 py-1">Play</button>
            <button className="bg-indigo-500 hover:bg-indigo-700 transition-all rounded-full px-20 py-1">Play</button>
          </div>
          <div>
            <div className="absolute w-60 bg-white h-20 top-0 right-0"></div>
            <div className="absolute w-60 bg-white h-20 bottom-11 right-0"></div>
            <div className="absolute w-60 bg-white h-20 top-0 right-80"></div>
            <div className="absolute w-60 bg-white h-20 bottom-11 right-80"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 -md:skew-x-12 perspective">
        {array?.map((category, idx) => (
          <div
            onClick={() => handleProject(category._id)}
            className={`relative h-[300px] rounded-lg brand
            ${calculatedGridClass(idx, 0)} ${calculatedGridClass(
              idx,
              3
            )} ${calculatedGridClass(idx, 4)}`}
            key={category._id}>
            <div className="overlay">
              <span className="text-6xl hidden brandName w-full h-full">
                {category.brand.genreName}
              </span>
            </div>
            <img
              className="md:w-full md:h-full object-cover"
              src={imgs}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;
