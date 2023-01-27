import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const ProductsTemplate = ({ productDetails }) => {
  return (
    <Link
      to={`/product_details/${productDetails.id}`}
      className="border my-1 border-gray-400 rounded-md laptop:shadow-none hover:shadow-productShadow snap-start h-[220px] min-w-[155px] max-w-[155px] p-[0.30rem] tablet:h-[245px] tablet:min-w-[165px] tablet:max-w-[165px] laptop:h-[260px] laptop:min-w-[180px] laptop:max-w-[180px]"
    >
      <div className="product-image rounded-md h-[50%] relative">
        <img
          src={productDetails.thumbnail}
          className="h-[100%] w-[100%] object-cover rounded-[0.160rem]"
          alt={`A picture of ${productDetails.title}`}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            console.log("Options");
          }}
          className="absolute bottom-0 text-sm border border-blue-500 rounded-full py-[0.20rem] px-[0.40rem] bg-blue-600 text-white font-medium hover:bg-blue-700 tablet:py-[0.35rem] tablet:px-[0.55rem]"
        >
          Options
        </button>
      </div>
      <div className="product-details rounded-md h-[50%] mt-2">
        <div className="product-name">
          <h3 className="max-h-[35px] tablet:max-h-[40px] overflow-auto text-sm font-medium tablet:text-[0.980rem] shadow-fadeShadow">
            {productDetails.title}
          </h3>
        </div>
        <div className="product-rating flex items-center justify-between mt-2 mb-1">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={productDetails.rating}
              precision={0.5}
              readOnly
              aria-label="rating"
              sx={{
                "& .MuiRating-iconFilled": {
                  color: `${productDetails.rating < 3 ? "red" : "green"}`,
                },
                fontSize: `${window.screen.width < 600 ? "0.9rem" : "1rem"}`,
              }}
            />
          </Stack>
          <FavoriteBorderIcon
            className="add-to-favourite cursor-pointer"
            style={{
              color: "black",
              fontSize: `${window.screen.width < 600 ? "0.125rem" : "1.5rem"}`,
            }}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              console.log("added to favourite");
            }}
          />
        </div>
        <div className="price flex flex-wrap items-center mt-1 tablet:mt-2 justify-between px-[0.15rem]">
          <p className="text-green-700 font-semibold tablet:text-lg laptop:text-xl">
            {productDetails.discountPercentage}%
          </p>
          <p className="text-base tablet:text-lg font-semibold laptop:text-xl">
            <span className="font-sans mr-[0.1rem]">₹</span>
            {Math.floor(
              productDetails.price -
                (productDetails.price * productDetails.discountPercentage) / 100
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductsTemplate;
