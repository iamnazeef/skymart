import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <>
      <section className="flex items-center tablet:hidden space-x-3 overflow-x-auto">
        {Array(1)
          .fill()
          .map((item, index) => (
            <section
              key={index}
              className="flex m-auto laptop:m-0 laptop:ml-10 laptop:mb-2 items-center space-x-2"
            >
              <section className="image-skeleton w-full">
                <Skeleton width={140} height={140} />
              </section>
              <section className="flex flex-col space-y-2">
                <Skeleton width={200} height={20} />
                <Skeleton width={200} height={30} />
                <Skeleton width={200} height={55} />
              </section>
            </section>
          ))}
      </section>
      <section className="hidden tablet:flex items-center space-x-3 overflow-x-auto">
        {Array(1)
          .fill()
          .map((item, index) => (
            <section
              key={index}
              className="flex m-auto tablet:mb-4 laptop:hidden items-center space-x-2"
            >
              <section className="image-skeleton w-full">
                <Skeleton width={200} height={165} />
              </section>
              <section className="flex flex-col space-y-2">
                <Skeleton width={320} height={35} />
                <Skeleton width={320} height={45} />
                <Skeleton width={320} height={60} />
              </section>
            </section>
          ))}
      </section>
      <section className="hidden laptop:flex items-center space-x-3 overflow-x-auto">
        {Array(1)
          .fill()
          .map((item, index) => (
            <section
              key={index}
              className="flex m-auto tablet:mb-4 laptop:m-0 laptop:ml-10 laptop:mb-2 items-center space-x-2"
            >
              <section className="image-skeleton w-full">
                <Skeleton width={185} height={220} />
              </section>
              <section className="flex flex-col space-y-2">
                <Skeleton width={305} height={50} />
                <Skeleton width={305} height={60} />
                <Skeleton width={305} height={80} />
              </section>
            </section>
          ))}
      </section>
    </>
  );
};

export default SkeletonLoader;
