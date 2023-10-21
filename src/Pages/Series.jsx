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
  const imgs = [
    "https://th.bing.com/th/id/R.8dc91656a317d765fc9f3b9fa2491e10?rik=rnrjU7zUWsmP2A&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.35fe07063a8599f1fb44959bf9d2423d?rik=O4VQ2mjjntcajQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.eb09ed5b29496b1ea58beae3de1e1cc2?rik=Aln%2fOHOi6xYpZg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.DniOBxUq95jea05A5GnmngAAAA?pid=ImgDet&w=400&h=384&rs=1",
    "https://sun9-59.userapi.com/c0SO72RVIkr6duvYJxS8T2tU11H5IBRcfYBM2Q/_e3s0KNajDU.jpg",
    "https://i.ytimg.com/vi/8Yg97R7POzs/maxresdefault.jpg",
  ];

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
    <div className="">
      <div className="md:flex py-8">
        <div className="flex flex-1 flex-wrap py-11 flex-col-reverse md:flex-row md:h-[70vh] items-center w-full p-3 ">
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
            <h1>New Episod coming on Thursday</h1>
            <p className="text-sm-light-text pr-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium assumenda cum aperiam cumque eatae?
            </p>
            <div className="space-x-5 pt-3">
              <button className="bg-indigo-500 hover:bg-indigo-700 transition-all rounded-full text-white px-20 py-2">
                Play
              </button>
              <button className="bg-indigo-500 text-white hover:bg-indigo-700 transition-all rounded-full  px-20 py-2">
                Play
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <section className="text-gray-700 flex-1 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h1 className="title-font font-medium text-3xl text-gray-900">
                    2.7K
                  </h1>
                  <p className="leading-relaxed">Downloads</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h1 className="title-font font-medium text-3xl text-gray-900">
                    1.3K
                  </h1>
                  <p className="leading-relaxed">Users</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24">
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h1zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2h1z"></path>
                  </svg>
                  <h1 className="title-font font-medium text-3xl text-gray-900">
                    74
                  </h1>
                  <p className="leading-relaxed">Files</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h1 className="title-font font-medium text-3xl text-gray-900">
                    46
                  </h1>
                  <p className="leading-relaxed">Places</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="lg:text-center mb-8">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl bottom-mark md:w-[500px] md:mx-auto">
          WatchWave Cinema
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          WatchWave is your one-stop destination for streaming the latest movies
          and dramas, just like Netflix. We offer a wide selection of content.
        </p>
      </div>
      <div className="cursor-pointer grid grid-cols-1 md:grid-cols-3 gap-3 -md:skew-x-12 perspective">
        {array?.map((category, idx) => (
          <div
            onClick={() => handleProject(category._id)}
            className={`relative h-[300px] rounded-lg brand
            ${calculatedGridClass(idx, 0)} ${calculatedGridClass(
              idx,
              3
            )} ${calculatedGridClass(idx, 4)}`}
            key={category._id}>
            <div className="overlay flex relative">
              <span className="text-3xl flex-1 mt-16 hidden brandName w-full h-full" id="seriesgenreName">
                {category?.brand?.genreName}
              </span>
              <img
                className="absolute top-0 bottom-0 right-0 left-0 w-16 h-16 rounded-full m-auto hidden brandName"
                src="https://th.bing.com/th/id/OIP.Tu-vaj5Vl1kIMetrFsuoKgHaHa?pid=ImgDet&w=500&h=500&rs=1"
                alt=""
              />
            </div>
            <img className="md:w-full md:h-full " src={imgs[idx]} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;
