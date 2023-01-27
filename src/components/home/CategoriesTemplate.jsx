import { Link } from "react-router-dom";
import ProductsTemplate from "./ProductsTemplate";

const CategoriesTemplate = ({
  category,
  productsArray,
  isClearanceSale,
  endpoint,
}) => {
  return (
    <div className="category-1 my-5">
      <div className="head flex items-baseline space-x-10 mb-3">
        <h2 className="text-base tablet:text-lg font-semibold mb-2">
          {category}
        </h2>
        <Link
          to={`/view_all_products?is_clearance=${isClearanceSale}&endpoint=${
            endpoint ? endpoint : "all"
          }`}
          className="text-sm underline hover:no-underline"
        >
          View all
        </Link>
      </div>
      <div className="clearance flex items-center space-x-3 overflow-x-auto snap-x">
        {productsArray.map((product) => (
          <ProductsTemplate productDetails={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesTemplate;
