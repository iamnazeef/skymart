import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <>
      {/* mobile skeleton */}
      <section className="flex justify-center tablet:hidden">
        {Array(1)
          .fill()
          .map((item, index) => (
            <section
              key={index}
              className="min-h-[90vh] mx-auto my-3 flex flex-col space-y-3"
            >
              <section className="images flex justify-center">
                <Skeleton width={350} height={350} />
              </section>
              <section className="product-name mx-5">
                <Skeleton width={180} height={25} />
              </section>
              <section className="description mx-5">
                <Skeleton width={280} height={25} />
              </section>
              <section className="rating mx-5">
                <Skeleton width={180} height={25} />
              </section>
              <section className="product-price mx-5">
                <Skeleton width={190} height={25} />
              </section>
              <section className="details mx-5">
                <Skeleton width={320} height={35} />
              </section>
              <section className="button flex items-center space-x-3">
                <section className="add-to-cart">
                  <Skeleton width={196} height={40} />
                </section>
                <section className="buy-now">
                  <Skeleton width={196} height={40} />
                </section>
              </section>
            </section>
          ))}
      </section>

      {/* tablet skeleton  */}
      <section className="hidden min-h-[90vh] tablet:flex tablet:justify-center laptop:hidden">
        {Array(1)
          .fill()
          .map((item, index) => (
            <section
              key={index}
              className="mx-auto my-3 flex flex-col space-y-5"
            >
              <section className="images">
                <Skeleton width={650} height={325} />
              </section>
              <section className="product-name">
                <Skeleton width={300} height={28} />
              </section>
              <section className="description">
                <Skeleton width={350} height={28} />
              </section>
              <section className="rating-and-price">
                <Skeleton width={300} height={30} />
              </section>
              <section className="offer-details">
                <Skeleton width={300} height={28} />
              </section>
              <section className="product-details">
                <Skeleton width={400} height={50} />
              </section>
              <section className="button flex items-center space-x-3">
                <section className="add-to-cart">
                  <Skeleton width={350} height={45} />
                </section>
                <section className="buy-now">
                  <Skeleton width={350} height={45} />
                </section>
              </section>
            </section>
          ))}
      </section>

      {/* laptop and desktop skeleton  */}
      <section className="hidden min-h-[90vh] laptop:flex items-center space-x-3 overflow-x-auto">
        {Array(1)
          .fill()
          .map((item, index) => (
            <section
              key={index}
              className="my-6 mx-auto mt-4 flex items-center space-x-3"
            >
              <section className="left self-start">
                <section className="images text-center">
                  <Skeleton width={400} height={290} />
                </section>
                <section className="buttons flex items-center space-x-2 mt-5 justify-center">
                  <Skeleton width={219} height={48} />
                  <Skeleton width={219} height={48} />
                </section>
              </section>
              <section className="right self-start flex flex-col space-y-2">
                <section className="title">
                  <Skeleton width={500} height={48} />
                  <Skeleton width={200} height={28} />
                </section>
                <section className="price">
                  <Skeleton width={300} height={28} />
                </section>
                <section className="description">
                  <Skeleton width={500} height={40} />
                </section>
                <section className="other-details">
                  <Skeleton width={350} height={350} />
                </section>
              </section>
            </section>
          ))}
      </section>
    </>
  );
};

export default SkeletonLoader;
