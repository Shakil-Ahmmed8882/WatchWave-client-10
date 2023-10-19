// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {

      const advertisementImages = ['https://th.bing.com/th/id/OIP.vY4Tb1g5nojyL8GyX-mplAHaEK?pid=ImgDet&rs=1','https://th.bing.com/th/id/OIP.HZB9lVSOWtWPrlm-dcBBKAHaE7?pid=ImgDet&rs=1','https://th.bing.com/th/id/OIP.bOJxq2jfm04VkSQtfsUGjAHaEK?pid=ImgDet&rs=1']










  return (
      <div>
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='w-11 h-11'><img src={advertisementImages[0]} alt="" /></SwiperSlide>
        <SwiperSlide className='w-11 h-11'><img src={advertisementImages[1]} alt="" /></SwiperSlide>
        <SwiperSlide className='w-11 h-11'><img src={advertisementImages[2]} alt="" /></SwiperSlide>
      </Swiper>
      </div>
  );
};

export default Slider;
