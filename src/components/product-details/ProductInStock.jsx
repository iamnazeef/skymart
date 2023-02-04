const ProductInStock = ({ productStock }) => {
  return (
    <>
      <section className="stock mt-2 text-sm tablet:text-base font-normal">
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
      </section>
    </>
  );
};

export default ProductInStock;
