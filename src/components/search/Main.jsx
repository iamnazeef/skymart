import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import scrollToTop from "../ScrollToTop";
import DisplayProducts from "./DisplayProducts";

const Main = () => {
  const [searchQueries, setSearchQueries] = useSearchParams();
  const query = searchQueries.get("q");
  const [products, setProducts] = useState([]);
  const [isProductExist, setIsProductExist] = useState(true);
  const [filter, setFilter] = useState(3);

  const getProducts = async () => {
    try {
      let response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      response = await response.json();
      let sortedProducts = response.products;
      sortedProducts.sort((p1, p2) => p2.rating - p1.rating);
      setProducts(sortedProducts);
      if (products.length <= 0) setIsProductExist(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    scrollToTop();
    setFilter(3);
    getProducts();
  }, [searchQueries]);

  return (
    <section className="search-body min-h-screen pt-36 px-3">
      <DisplayProducts
        products={products}
        setProducts={setProducts}
        isProductExist={isProductExist}
        query={query}
        filter={filter}
        setFilter={setFilter}
      />
    </section>
  );
};

export default Main;
