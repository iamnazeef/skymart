import { useState } from "react";
import { useEffect } from "react";
import CategoriesTemplate from "./CategoriesTemplate";

const Products = ({
  endpoint,
  category,
  setIsLoading,
  isClearanceSale,
  isLoading,
}) => {
  const [productsArray, setProductsArray] = useState([]);

  //API Call
  const fetchProducts = async (URL) => {
    try {
      let response = await fetch(URL);
      response = await response.json();
      setProductsArray(response.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!isClearanceSale) {
      fetchProducts(
        `https://dummyjson.com/products/category/${endpoint}?limit=20`
      );
    } else {
      fetchProducts("https://dummyjson.com/products?limit=20");
    }
  }, []);

  return (
    <section className="products">
      {!isLoading && (
        <CategoriesTemplate
          category={category}
          isClearanceSale={isClearanceSale}
          productsArray={productsArray}
          endpoint={endpoint}
        />
      )}
    </section>
  );
};

export default Products;
