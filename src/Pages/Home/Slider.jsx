// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../index.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper mt-16 md:mt-0"
    >
      {/* slide-1 */}
      <SwiperSlide>
        <img
          className="h-full lg:max-h-[700px] relative brightness-50"
          src="/rsz_slide-1.jpg"
          alt=""
        />
        <div className="flex flex-col items-start left-[20%] lg:left-[10%]  absolute top-[30%] md:top-[50%] lg:top-[60%] gap-2  md:gap-6 text-white">
          <h3 className=" font-bold text-lg md:text-2xl lg:text-3xl">
            Explore your Dream House
          </h3>
          <p className=" font-medium text-sm md:text-base lg:text-lg w-2/3 text-left">
            Allow us to guide you through the innovative stress free approach in
            finding your dream Properties.
          </p>
          <div className="gap-3 hidden md:flex">
            <button className="btn bg-gray-700 text-white font-bold">
              Get Started Now
            </button>
            <button className="btn btn-outline border-white  font-bold text-white">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
      {/* slide-2 */}
      <SwiperSlide>
        <img
          className="max-h-[700px] relative brightness-50 "
          src="/rsz_slide-2.jpg"
          alt=""
        />
        <div className="flex flex-col items-start left-[20%] lg:right-[10%]  absolute top-[30%] md:top-[50%] lg:top-[60%] gap-2  md:gap-6 text-white">
        <h3 className=" font-bold text-lg md:text-2xl lg:text-3xl">
            Explore your Dream House
          </h3>
          <p className=" font-medium text-sm md:text-base lg:text-lg w-2/3 text-left">
            Allow us to guide you through the innovative stress free approach in
            finding your dream Properties.
          </p>
          <div className="gap-3 hidden md:flex">
            <button className="btn bg-gray-700 text-white font-bold">
              Get Started Now
            </button>
            <button className="btn btn-outline border-white  font-bold text-white">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
      {/* slide-3 */}
      <SwiperSlide>
        <img
          className="max-h-[700px] relative brightness-50"
          src="/rsz_slide-3.jpg"
          alt=""
        />
        <div className="flex flex-col items-start left-[20%] lg:left-[10%]  absolute top-[30%] md:top-[50%] lg:top-[60%] gap-2  md:gap-6 text-white">
        <h3 className=" font-bold text-lg md:text-2xl lg:text-3xl">
            Explore your Dream House
          </h3>
          <p className=" font-medium text-sm md:text-base lg:text-lg w-2/3 text-left">
            Allow us to guide you through the innovative stress free approach in
            finding your dream Properties.
          </p>
          <div className="gap-3 hidden md:flex">
            <button className="btn bg-gray-700 text-white font-bold">
              Get Started Now
            </button>
            <button className="btn btn-outline border-white  font-bold text-white">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
      {/* slide-4 */}
      <SwiperSlide>
        <img
          className="max-h-[700px] relative brightness-50"
          src="/rsz_slide-4.jpg"
          alt=""
        />
        <div className="flex flex-col items-start left-[20%] lg:right-[10%]  absolute top-[30%] md:top-[50%] lg:top-[60%] gap-2  md:gap-6 text-white">
        <h3 className=" font-bold text-lg md:text-2xl lg:text-3xl">
            Explore your Dream House
          </h3>
          <p className=" font-medium text-sm md:text-base lg:text-lg w-2/3 text-left">
            Allow us to guide you through the innovative stress free approach in
            finding your dream Properties.
          </p>
          <div className="gap-3 hidden md:flex">
            <button className="btn bg-gray-700 text-white font-bold">
              Get Started Now
            </button>
            <button className="btn btn-outline border-white  font-bold text-white">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
