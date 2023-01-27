import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import discountedPrice from "../discountedPrice";
import Paginate from "../paginate/Main";
import GeneralProductsTemplate from "./GeneralProductsTemplate";
import SkeletonLoader from "./SkeletonLoader";

const DisplayProducts = ({ isLoading, productsArray, filter, setFilter }) => {
  //Paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentProducts, setCurrentProducts] = useState([]);

  //Update currentPage
  const paginate = (number) => setCurrentPage(number);

  //Filter products
  const handleFilter = (event) => {
    const value = event.target.value;
    setFilter(value);
    if (value === 1) {
      currentProducts.sort((p1, p2) => {
        const p1Price = discountedPrice(p1.price, p1.discountPercentage);
        const p2Price = discountedPrice(p2.price, p2.discountPercentage);
        return p2Price - p1Price;
      });
    } else if (value === 2) {
      currentProducts.sort((p1, p2) => {
        const p1Price = discountedPrice(p1.price, p1.discountPercentage);
        const p2Price = discountedPrice(p2.price, p2.discountPercentage);
        return p1Price - p2Price;
      });
    } else if (value === 3) {
      currentProducts.sort((p1, p2) => p2.rating - p1.rating);
    } else {
      currentProducts.sort((p1, p2) => p1.rating - p2.rating);
    }
  };

  useEffect(() => {
    //Products to display.
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    setCurrentProducts(
      productsArray.slice(indexOfFirstProduct, indexOfLastProduct)
    );

    //Setting filter to the default option.
    setFilter(3);
  }, [currentPage, productsArray]);

  return (
    <div className="display-products min-h-screen">
      <FormControl sx={{ minWidth: 150, m: 1, marginTop: 2 }} size="small">
        <InputLabel id="product-filtering">Filter</InputLabel>
        <Select
          labelId="product-filtering"
          id="product-filtering"
          value={filter}
          label="Price"
          onChange={handleFilter}
        >
          <MenuItem value={1}>Price (High to Low)</MenuItem>
          <MenuItem value={2}>Price (Low to High)</MenuItem>
          <MenuItem value={3}>Popularity (High to Low)</MenuItem>
          <MenuItem value={4}>Popularity (Low to High)</MenuItem>
        </Select>
      </FormControl>
      <div className="p-2 grid grid-cols-1 laptop:grid-cols-2 laptop:gap-x-3 w-full max-w-[1115px] mx-auto">
        {Array(20)
          .fill()
          .map((data, index) => (
            <div key={index}>{isLoading && <SkeletonLoader cards={20} />}</div>
          ))}
        {currentProducts.map((product) => (
          <GeneralProductsTemplate productDetails={product} key={product.id} />
        ))}
      </div>
      {!isLoading && (
        <Paginate
          totalProducts={productsArray.length}
          productsPerPage={productsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default DisplayProducts;
