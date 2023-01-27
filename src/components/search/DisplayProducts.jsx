import GeneralProductsTemplate from "../view-all-products/GeneralProductsTemplate";
import LoadingGif from "../../assets/loading-gif/loading-gif.gif";
import NoProducts from "../../assets/no-products/no-products.webp";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import discountedPrice from "../discountedPrice";

const DisplayProducts = ({
  products,
  setProducts,
  isProductExist,
  query,
  filter,
  setFilter,
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    if (value === 1) {
      products.sort((p1, p2) => {
        const p1Price = discountedPrice(p1.price, p1.discountPercentage);
        const p2Price = discountedPrice(p2.price, p2.discountPercentage);
        return p2Price - p1Price;
      });
    } else if (value === 2) {
      products.sort((p1, p2) => {
        const p1Price = discountedPrice(p1.price, p1.discountPercentage);
        const p2Price = discountedPrice(p2.price, p2.discountPercentage);
        return p1Price - p2Price;
      });
    } else if (value === 3) {
      products.sort((p1, p2) => p2.rating - p1.rating);
    } else {
      products.sort((p1, p2) => p1.rating - p2.rating);
    }

    setProducts(products);
  };

  return (
    <>
      {products.length > 0 && (
        <>
          <div className="product-details">
            <p className="font-medium text-base laptop:text-lg laptop:mb-5 text-blue-800 mb-4">
              {`Showing ${products.length} ${
                products.length === 1 ? "result" : "results"
              } for "${query}"`}
            </p>
            <FormControl sx={{ minWidth: 150, marginBottom: 2 }} size="small">
              <InputLabel id="product-filtering">Filter</InputLabel>
              <Select
                labelId="product-filtering"
                id="product-filtering"
                value={filter}
                label="Price"
                onChange={handleChange}
              >
                <MenuItem value={1}>Price (High to Low)</MenuItem>
                <MenuItem value={2}>Price (Low to High)</MenuItem>
                <MenuItem value={3}>Popularity (High to Low)</MenuItem>
                <MenuItem value={4}>Popularity (Low to High)</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="products grid grid-cols-1 laptop:grid-cols-2 laptop:gap-x-3 w-full max-w-[1115px] mx-auto">
            {products.map((data, index) => (
              <GeneralProductsTemplate productDetails={data} key={index} />
            ))}
          </div>
        </>
      )}
      {products.length <= 0 && (
        <div className="h-[60vh] flex flex-col justify-center items-center">
          {isProductExist ? (
            <img src={LoadingGif} className="mx-auto w-[75px]" />
          ) : (
            <img
              src={NoProducts}
              className="rounded-md mb-2 w-full max-w-[280px] tablet:max-w-[350px]"
            />
          )}
          <p className="font-medium text-sm max-w-[280px] tablet:text-basic tablet:max-w-[350px] text-gray-600">
            {isProductExist
              ? "Loading..."
              : "Oh no! looks like we're fresh out of that product. But don't worry, we have plenty of other options! Check them out."}
          </p>
        </div>
      )}
    </>
  );
};

export default DisplayProducts;
