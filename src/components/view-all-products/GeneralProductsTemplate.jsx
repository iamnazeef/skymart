import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect } from "react";
import scrollToTop from "../../utils/ScrollToTop";
import { useNavigate } from "react-router-dom";

const GeneralProductsTemplate = ({ productDetails }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const navigate = useNavigate();

  const handleToDetailedProductPage = () => {
    navigate(`/product_details/${productDetails.id}`);
  };

  return (
    <section
      className="products p-1 border border-gray-400 h-[140px] w-full max-w-[500px] mb-3 rounded-md flex space-x-2 mx-auto cursor-pointer tablet:h-[190px]  tablet:max-w-[640px] tablet:mb-5 laptop:h-[250px] laptop:max-w-[500px] laptop:shadow-none hover:shadow-productShadow"
      onClick={handleToDetailedProductPage}
    >
      <section className="product-image relative w-[40%] laptop:max-w-[40%] rounded-md">
        <img
          src={productDetails.thumbnail}
          className="h-[100%] w-[100%] object-contain"
          loading="lazy"
          alt={`image of ${productDetails.title}`}
        />
        <button
          className="bg-blue-600 rounded-full p-1 absolute top-0 hover:bg-blue-700 laptop:shadow-cardShadow"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            console.log("Options");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-dots-vertical text-white laptop:hidden"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
          </svg>
          <p className="hidden laptop:block px-1 py-[0.10rem] text-white font-medium">
            Options
          </p>
        </button>
      </section>
      <section className="product-details w-[60%] laptop:max-w-[60%] rounded-md overflow-wrap mt-2">
        <section className="product-title flex justify-between">
          <h3 className="font-medium max-h-[30px] tablet:max-h-[40px] tablet:text-lg overflow-auto w-full laptop:max-h-[60px] laptop:text-xl">
            {productDetails.title}
          </h3>
          <section
            className="tablet:hidden"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              console.log("hello");
            }}
          >
            <FavoriteBorderIcon
              className="add-to-favourite cursor-pointer"
              style={{ color: "black", fontSize: "1.5rem" }}
            />
          </section>
        </section>
        <section className="rating mt-1 tablet:flex tablet:items-center tablet:space-x-3">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              precision={0.5}
              defaultValue={0}
              value={productDetails.rating}
              readOnly
              aria-label="rating"
              sx={{
                "& .MuiRating-iconFilled": {
                  color: `${productDetails.rating < 3 ? "red" : "green"}`,
                },
                fontSize: `${window.screen.width < 600 ? "0.8rem" : "1rem"}`,
              }}
            />
          </Stack>
          <section className="hidden tablet:block">
            <FavoriteBorderIcon
              className="add-to-favourite cursor-pointer"
              style={{ color: "black", fontSize: "1.5rem" }}
              onClick={(event) => {
                event.stopPropagation();
                console.log("added to favourite");
              }}
            />
          </section>
        </section>
        <section className="description h-[38px] overflow-auto tablet:h-[45px] mt-1 border-b laptop:h-[50px] laptop:mt-2">
          <p className="text-xs tablet:text-sm">{productDetails.description}</p>
        </section>
        <section className="price flex flex-wrap items-center space-x-1 mt-1 tablet:mt-2">
          <p className="text-green-600 font-semibold tablet:text-lg laptop:text-xl">
            {productDetails.discountPercentage}%
          </p>
          <p className="original-price text-[0.75rem] tablet:text-base line-through laptop:text-base">
            <span className="font-sans mr-[0.1rem]">₹</span>
            {productDetails.price}
          </p>
          <p className="text-base tablet:text-lg font-semibold laptop:text-xl">
            <span className="font-sans mr-[0.1rem]">₹</span>
            {Math.floor(
              productDetails.price -
                (productDetails.price * productDetails.discountPercentage) / 100
            )}
          </p>
        </section>
      </section>
    </section>
  );
};

export default GeneralProductsTemplate;
