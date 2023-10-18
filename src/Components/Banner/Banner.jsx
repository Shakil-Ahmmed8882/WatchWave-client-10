import arrow from "./arrow.svg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="flex gap-3 flex-col-reverse md:flex-row text-white md:text-black  sm:text-center md:text-left banner-bg px-3 md:mt-5">
      <div className="flex-1 space-y-4">
        <h1 className="underline-style text-[20px] sm:text-3xl md:text-4xl mb-2">
          WATCH TV SHOWS OR MOVIES ANYWHERE. ANYTIME
        </h1>
        <p className="text-sm-light-text md:text-light-text">
          Enjoy the freedom to watch your favorite TV shows and movies wherever
          and whenever you want with our extensive collection of content.
        </p>
        <div className="flex sm:justify-center md:justify-start flex-col md:flex-row gap-3 my-5 md:mt-6 md:my-5 sm:items-center">
          <button className="p-[6px] sm:p-3 w-[100%] sm:w-[80%] md:w-[50%] text-left underline md:underline-offset-0 md:text-[14px]  sm:text-center md:bg-primary-clr md:my-0 rounded-full">
            Browse our collection
          </button>
          <span className=" hidden sm:flex items-center arrow-container sm:justify-center">
            <span className="ml-5 md:ml-0 md:text-[14px]">Spring 23 collection{" "}</span>
            <img className="w-6 arrow" src={arrow} alt="" />
          </span>
        </div>
        <div className="flex flex-col md:flex-row sm:text-center md:text-left p-1 md:p-8 my-3 pt-8 md:border-2 gap-3 relative md:top-5">
          <div className="text-3xl relative z-10">50k</div>
          <span className="absolute w-20 -top-3 -z-20 -left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.dev/svgjs"
              width="70"
              height="70"
              preserveAspectRatio="none"
              viewBox="0 0 1440 560">
              <g mask='url("#SvgjsMask1006")' fill="none">
                <path
                  d="M550.22 234.53 a46.85 46.85 0 1 0 93.7 0 a46.85 46.85 0 1 0 -93.7 0z"
                  stroke="#e73635"></path>
                <path
                  d="M782.54 228.74a22.15 22.15 0 1 0 1.21 44.29z"
                  stroke="#037b0b"></path>
                <path
                  d="M989.32 394.07 a7.59 7.59 0 1 0 15.18 0 a7.59 7.59 0 1 0 -15.18 0z"
                  stroke="#e73635"></path>
                <path
                  d="M1300.88 438.8 a54.64 54.64 0 1 0 109.28 0 a54.64 54.64 0 1 0 -109.28 0z"
                  stroke="#e73635"></path>
                <path
                  d="M648.43 33.65a45.08 45.08 0 1 0-87.92-20z"
                  fill="#e73635"></path>
                <path
                  d="M87.17 451.8 a30.48 30.48 0 1 0 60.96 0 a30.48 30.48 0 1 0 -60.96 0z"
                  stroke="#d3b714"></path>
                <path
                  d="M23.98 421.48L42.56 421.48L42.56 440.06L23.98 440.06z"
                  stroke="#037b0b"></path>
                <path
                  d="M752.82 304.49 a41.04 41.04 0 1 0 82.08 0 a41.04 41.04 0 1 0 -82.08 0z"
                  fill="#037b0b"></path>
                <path
                  d="M891.58 382.31 a27.72 27.72 0 1 0 55.44 0 a27.72 27.72 0 1 0 -55.44 0z"
                  fill="#d3b714"></path>
                <path
                  d="M11.64 461.8L28.07 461.8L28.07 478.23L11.64 478.23z"
                  fill="#d3b714"></path>
                <path
                  d="M407.47 58.42a8.98 8.98 0 1 0 11.36-13.91z"
                  stroke="#d3b714"></path>
                <path
                  d="M112.93 426.07L113.25 426.07L113.25 426.39L112.93 426.39z"
                  stroke="#037b0b"></path>
                <path
                  d="M594.55 41.35L613.71 41.35L613.71 60.51L594.55 60.51z"
                  stroke="#037b0b"></path>
                <path
                  d="M311.12 70.71a46.54 46.54 0 1 0-37.66 85.11z"
                  fill="#e73635"></path>
                <path
                  d="M399.43 68.71L427.39 68.71L427.39 96.67L399.43 96.67z"
                  stroke="#037b0b"></path>
                <path
                  d="M566.34 264.99 a53.93 53.93 0 1 0 107.86 0 a53.93 53.93 0 1 0 -107.86 0z"
                  stroke="#037b0b"></path>
                <path
                  d="M593.94 121.5L649.35 121.5L649.35 176.91L593.94 176.91z"
                  fill="#037b0b"></path>
                <path
                  d="M590.59 385.94L613.17 385.94L613.17 387.15L590.59 387.15z"
                  stroke="#e73635"></path>
                <path
                  d="M170.79 380.94 a42.71 42.71 0 1 0 85.42 0 a42.71 42.71 0 1 0 -85.42 0z"
                  stroke="#d3b714"></path>
                <path
                  d="M321.9 397.96L360.12 397.96L360.12 422.57L321.9 422.57z"
                  fill="#d3b714"></path>
                <path
                  d="M42.91 554.1 a33.59 33.59 0 1 0 67.18 0 a33.59 33.59 0 1 0 -67.18 0z"
                  fill="#037b0b"></path>
                <path
                  d="M59.67 152.98a48.77 48.77 0 1 0 59.26-77.48z"
                  fill="#d3b714"></path>
                <path
                  d="M-40 333.81 a52.04 52.04 0 1 0 104.08 0 a52.04 52.04 0 1 0 -104.08 0z"
                  fill="#e73635"></path>
                <path
                  d="M819.1 65.4L874.82 65.4L874.82 113.22L819.1 113.22z"
                  fill="#e73635"></path>
                <path
                  d="M517.97 506.63L522.17 506.63L522.17 542.64L517.97 542.64z"
                  fill="#e73635"></path>
                <path
                  d="M629.73 382.66L657.97 382.66L657.97 410.9L629.73 410.9z"
                  fill="#d3b714"></path>
                <path
                  d="M561.67 334.77L590.28 334.77L590.28 363.38L561.67 363.38z"
                  stroke="#d3b714"></path>
                <path
                  d="M189.62 238.26 a28.59 28.59 0 1 0 57.18 0 a28.59 28.59 0 1 0 -57.18 0z"
                  fill="#037b0b"></path>
                <path
                  d="M846.67 401.92 a38.35 38.35 0 1 0 76.7 0 a38.35 38.35 0 1 0 -76.7 0z"
                  stroke="#037b0b"></path>
                <path
                  d="M641.84 446.22 a2.94 2.94 0 1 0 5.88 0 a2.94 2.94 0 1 0 -5.88 0z"
                  stroke="#e73635"></path>
                <path
                  d="M181.26 33.34 a26.23 26.23 0 1 0 52.46 0 a26.23 26.23 0 1 0 -52.46 0z"
                  stroke="#e73635"></path>
                <path
                  d="M439.05 335.57 a48.05 48.05 0 1 0 96.1 0 a48.05 48.05 0 1 0 -96.1 0z"
                  stroke="#037b0b"></path>
                <path
                  d="M724.89 374.13 a42.9 42.9 0 1 0 85.8 0 a42.9 42.9 0 1 0 -85.8 0z"
                  stroke="#037b0b"></path>
              </g>
              <defs>
                <mask id="SvgjsMask1006">
                  <rect width="1440" height="560" fill="#ffffff"></rect>
                </mask>
              </defs>
            </svg>
          </span>
          <div className="text-sm-light-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            quibusdam. Autem expedita porro debitis ipsum!
          </div>
        </div>
      </div>
      <div className="md:grid w-full right-container hidden md:grid-cols-2 gap-3 flex-1 min-h-[80vh]">
        <div className=" bg-1 bg-cyan-300   rounded-xl  row-span-2">
          <div className="floating-text">
            <h1 className="font-bold my-1 text-[16px]">caption</h1>
            <p>Lorem ipsum dolor adipisicing elit. Quidem, corrupti.</p>
          </div>
        </div>
        <div className="bg-slate-200   rounded-xl  bg-2">
          <div className="floating-text">
            <h1 className="font-bold my-1 text-[16px]">caption</h1>
            <p>Lorem ipsum dolor adipisicing elit. Quidem, corrupti.</p>
          </div>
        </div>
        <div className="bg-black    rounded-xl bg-3">
          <div className="floating-text">
            <h1 className="font-bold my-1 text-[16px]">caption</h1>
            <p>Lorem ipsum dolor adipisicing elit. Quidem, corrupti.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
