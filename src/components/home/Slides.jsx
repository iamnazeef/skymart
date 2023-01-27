import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Mousewheel } from "swiper";
SwiperCore.use([Autoplay, Mousewheel]);
import "swiper/css";

const Slides = () => {
  const images = [
    "https://i5.walmartimages.com/dfw/4ff9c6c9-d161/k2-_fc675e08-e53f-4fd2-bdec-6944128360c9.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70",
    "https://i5.walmartimages.com/dfw/4ff9c6c9-b869/k2-_cdcdbd45-f49b-4546-851c-cf5b35916a5c.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70",
    "https://i5.walmartimages.com/dfw/4ff9c6c9-496d/k2-_617b5c21-96d7-4589-962c-6be4129f40d4.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70",
    "https://i5.walmartimages.com/dfw/4ff9c6c9-43b3/k2-_254d9811-84c8-4c44-9136-76ca2d6e892e.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70",
    "https://i5.walmartimages.com/dfw/4ff9c6c9-3df6/k2-_7ad50cc3-facc-4635-9d20-c312d163f875.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70",
    "https://i5.walmartimages.com/dfw/4ff9c6c9-9990/k2-_e1bcbb00-a6ff-4560-8f60-a1df6702fcac.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70",
  ];

  const messages = [
    "Big fun, low prices!",
    "Big fun, low prices!",
    "Up to 65% off",
    "Rollbacks on toys & games",
    "Warm up for way less",
    "Treat your valentine",
  ];

  return (
    <div className="slides rounded-full tablet:w-[50%] laptop:w-[60%] desktop:w-[70%]">
      <div className="reserve_pick_up_delivery absolute tablet:relative laptop:hidden left-0 w-full bg-blue-100 text-gray-800 flex items-center justify-between py-3 px-4 shadow-md max-h-[58.8px] tablet:rounded-lg">
        <p className="font-semibold text-sm">Reserve pickup or delivery</p>
        <button className="bg-white border border-black font-semibold text-gray-900 rounded-full py-[0.4rem] px-3 text-sm hover:border-2 min-w-[100.41px] max-w-[100.41px]">
          See times
        </button>
      </div>
      <div className="slides_section pt-[5rem] flex overflow-auto space-x-2 p-1 tablet:pt-[.5rem] tablet:min-h-[420px] laptop:min-h-[440px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          mousewheel={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="py-2 rounded-xl"
        >
          {images.map((image, index) => (
            <SwiperSlide
              className="min-w-full rounded-lg shadow-cardShadow"
              key={index}
            >
              <img
                src={images[index]}
                alt="clearance"
                className="rounded-t-lg w-full min-h-[170px] max-h-[353px] object-cover tablet:min-h-full tablet:rounded-lg cursor-pointer"
              />
              <div
                className={`offer details p-3 tablet:absolute tablet:top-0 ${
                  index == 4 || index == 1
                    ? "text-gray-800 tablet:text-white"
                    : "text-gray-800"
                }`}
              >
                <h2 className="font-semibold laptop:text-2xl laptop:mb-1">
                  {messages[index]}
                </h2>
                <p className="text-sm laptop:text-base w-full max-w-[250px]">
                  Hurry to score low, low prices.
                </p>
                <button className="border border-black font-semibold text-black rounded-full mt-12 tablet:mt-5 py-[0.4rem] px-3 text-sm bg-white laptop:text-base">
                  Shop now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slides;
