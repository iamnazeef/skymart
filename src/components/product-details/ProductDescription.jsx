const ProductDescription = ({ ProductDescription }) => {
  return (
    <>
      <div className="product-description p-3 laptop:p-0 border-b w-full max-w-[600px] laptop:border-none">
        <h4 className="text-sm tablet:text-base font-medium laptop:font-medium">
          Product Details
        </h4>
        <h5 className="text-sm tablet:text-base font-normal my-1">Details</h5>
        <p className="text-xs tablet:text-sm">
          PRODUCT STORY - {ProductDescription}
        </p>
      </div>
    </>
  );
};

export default ProductDescription;
