

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide><img src={"https://i.ibb.co/5vbV1rs/pexels-binyamin-mellish-186077.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"https://i.ibb.co/JdtBPR3/pexels-jessica-bryant-1370704-1.jpg"}></img></SwiperSlide>
        <SwiperSlide><img src={"https://i.ibb.co/QP2KsQf/pexels-mark-2724748.jpg"}></img></SwiperSlide>
      </Swiper>
    );
};

export default Slider;