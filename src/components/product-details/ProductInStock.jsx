const ProductInStock = ({ productStock }) => {
  return (
    <>
      <div className="stock mt-2 text-sm tablet:text-base font-normal">
        <p>
          Stock:{" "}
          <span
            className={`font-semibold ${
              productStock < 10 ? "text-red-600" : "text-black"
            }`}
          >
            {productStock} left
          </span>
        </p>
      </div>
    </>
  );
};

export default ProductInStock;
