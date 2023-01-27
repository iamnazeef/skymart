import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ProductRating = ({ productRating }) => {
  return (
    <>
      <div className="product-rating flex items-center">
        <Stack spacing={1} className="my-2">
          <Rating
            name="half-rating-read"
            value={productRating || ""}
            precision={0.5}
            readOnly
            aria-label="rating"
            sx={{
              "& .MuiRating-iconFilled": {
                color: `${productRating < 3 ? "yellow" : "green"}`,
              },
              fontSize: "0.85rem",
            }}
          />
        </Stack>
        <span
          className={`ml-2 text-xs ${
            productRating < 3 ? "bg-red-600" : "bg-[#008000]"
          } text-white p-[0.19rem] font-medium rounded-sm`}
        >
          {productRating}
        </span>
      </div>
    </>
  );
};

export default ProductRating;
