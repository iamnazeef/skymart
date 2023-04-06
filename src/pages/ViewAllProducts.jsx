import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DisplayProducts from "../components/view-all-products/DisplayProducts";

const ViewAllProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productsArray, setProductsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState(3);

  const isClearance = searchParams.get("is_clearance");
  const endpoint = searchParams.get("endpoint");

  const getProducts = async (URL) => {
    try {
      let response = await fetch(URL);
      response = await response.json();
      let sortedProducts = response.products;
      sortedProducts.sort((p1, p2) => p2.rating - p1.rating);
      setProductsArray(sortedProducts);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setFilter(3);
    if (isClearance == "true") {
      getProducts("https://dummyjson.com/products");
    } else if (isClearance == "false") {
      getProducts(`https://dummyjson.com/products/category/${endpoint}`);
    }
  }, []);

  return (
    <section className="view-all-products pt-36">
      <DisplayProducts
        isLoading={isLoading}
        productsArray={productsArray}
        setProductsArray={setProductsArray}
        filter={filter}
        setFilter={setFilter}
      />
    </section>
  );
};

export default ViewAllProducts;
