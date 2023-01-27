import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <>
      {/* mobile skeleton */}
      <div className="flex justify-center tablet:hidden">
        {Array(1)
          .fill()
          .map((item, index) => (
            <div
              key={index}
              className="min-h-[90vh] mx-auto my-3 flex flex-col space-y-3"
            >
              <div className="images flex justify-center">
                <Skeleton width={350} height={350} />
              </div>
              <div className="product-name mx-5">
                <Skeleton width={180} height={25} />
              </div>
              <div className="description mx-5">
                <Skeleton width={280} height={25} />
              </div>
              <div className="rating mx-5">
                <Skeleton width={180} height={25} />
              </div>
              <div className="product-price mx-5">
                <Skeleton width={190} height={25} />
              </div>
              <div className="details mx-5">
                <Skeleton width={320} height={35} />
              </div>
              <div className="button flex items-center space-x-3">
                <div className="add-to-cart">
                  <Skeleton width={196} height={40} />
                </div>
                <div className="buy-now">
                  <Skeleton width={196} height={40} />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* tablet skeleton  */}
      <div className="hidden min-h-[90vh] tablet:flex tablet:justify-center laptop:hidden">
        {Array(1)
          .fill()
          .map((item, index) => (
            <div key={index} className="mx-auto my-3 flex flex-col space-y-5">
              <div className="images">
                <Skeleton width={650} height={325} />
              </div>
              <div className="product-name">
                <Skeleton width={300} height={28} />
              </div>
              <div className="description">
                <Skeleton width={350} height={28} />
              </div>
              <div className="rating-and-price">
                <Skeleton width={300} height={30} />
              </div>
              <div className="offer-details">
                <Skeleton width={300} height={28} />
              </div>
              <div className="product-details">
                <Skeleton width={400} height={50} />
              </div>
              <div className="button flex items-center space-x-3">
                <div className="add-to-cart">
                  <Skeleton width={350} height={45} />
                </div>
                <div className="buy-now">
                  <Skeleton width={350} height={45} />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* laptop and desktop skeleton  */}
      <div className="hidden min-h-[90vh] laptop:flex items-center space-x-3 overflow-x-auto">
        {Array(1)
          .fill()
          .map((item, index) => (
            <div
              key={index}
              className="my-6 mx-auto mt-4 flex items-center space-x-3"
            >
              <div className="left self-start">
                <div className="images text-center">
                  <Skeleton width={400} height={290} />
                </div>
                <div className="buttons flex items-center space-x-2 mt-5 justify-center">
                  <Skeleton width={219} height={48} />
                  <Skeleton width={219} height={48} />
                </div>
              </div>
              <div className="right self-start flex flex-col space-y-2">
                <div className="title">
                  <Skeleton width={500} height={48} />
                  <Skeleton width={200} height={28} />
                </div>
                <div className="price">
                  <Skeleton width={300} height={28} />
                </div>
                <div className="description">
                  <Skeleton width={500} height={40} />
                </div>
                <div className="other-details">
                  <Skeleton width={350} height={350} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SkeletonLoader;
