import { useState } from "react";
import { useEffect } from "react";
import ProductsTemplate from "../home/ProductsTemplate";

const SimilarProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  const getSimilarProducts = async () => {
    let response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    response = await response.json();
    setProducts(response.products);
  };

  useEffect(() => {
    getSimilarProducts();
  }, []);

  return (
    <section className="flex mx-3 space-x-3 overflow-auto snap-x">
      {products &&
        products.map((productDetails) => (
          <ProductsTemplate
            productDetails={productDetails}
            className="snap-start"
            key={productDetails.id}
          />
        ))}
    </section>
  );
};

export default SimilarProducts;
