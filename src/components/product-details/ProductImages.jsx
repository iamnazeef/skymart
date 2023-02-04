// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import SwiperCore, { Autoplay, Mousewheel, Pagination } from "swiper";
SwiperCore.use([Autoplay, Mousewheel]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ProductImages = ({ productImages, productTitle }) => {
  return (
    <section className="product-images w-full">
      {productImages && (
        <Swiper
          pagination={true}
          modules={[Pagination]}
          mousewheel={true}
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {productImages.map((data, index) => (
            <SwiperSlide key={index}>
              <img
                src={data}
                alt={productTitle}
                className="w-full h-[300px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default ProductImages;
