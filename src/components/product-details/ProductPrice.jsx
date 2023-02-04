const ProductPrice = ({ productDiscount, ProductPrice }) => {
  return (
    <>
      <section className="product-price font-semibold flex items-center space-x-1 laptop:space-x-2">
        <span className="font-semibold tablet:text-base laptop:text-xl text-[#008000]">
          {productDiscount}% OFF
        </span>
        <section className="flex items-center mx-1 font-normal text-base tablet:text-lg line-through laptop:text-xl text-gray-500">
          <span className="font-sans">₹</span>
          <p>{ProductPrice}</p>
        </section>
        <section className="flex items-center text-lg tablet:text-xl">
          <span className="font-sans">₹</span>
          <p>
            {Math.floor(ProductPrice - (ProductPrice * productDiscount) / 100)}
          </p>
        </section>
      </section>
    </>
  );
};

export default ProductPrice;
