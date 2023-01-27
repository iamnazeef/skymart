import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ cards }) => {
  return (
    <>
      <div className="flex items-center tablet:hidden space-x-3 overflow-x-auto">
        {Array(cards)
          .fill()
          .map((item, index) => (
            <div key={index}>
              <div className="image-skeleton">
                <Skeleton width={140} height={140} />
              </div>
              <div>
                <Skeleton width={140} height={20} />
                <Skeleton width={140} height={30} />
                <Skeleton width={140} height={20} />
              </div>
            </div>
          ))}
      </div>
      <div className="hidden tablet:flex items-center laptop:hidden space-x-3 overflow-x-auto">
        {Array(cards)
          .fill()
          .map((item, index) => (
            <div key={index}>
              <div className="image-skeleton">
                <Skeleton width={160} height={140} />
              </div>
              <div>
                <Skeleton width={160} height={20} />
                <Skeleton width={160} height={30} />
                <Skeleton width={160} height={20} />
              </div>
            </div>
          ))}
      </div>
      <div className="hidden laptop:flex items-center space-x-3 overflow-x-auto">
        {Array(cards)
          .fill()
          .map((item, index) => (
            <div key={index}>
              <div className="image-skeleton">
                <Skeleton width={170} height={140} />
              </div>
              <div>
                <Skeleton width={170} height={20} />
                <Skeleton width={170} height={30} />
                <Skeleton width={170} height={20} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SkeletonLoader;
