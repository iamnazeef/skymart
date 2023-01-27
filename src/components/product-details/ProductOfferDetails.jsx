const ProductOfferDetails = ({ productPrice }) => {
  return (
    <div className="border border-gray-200 cursor-pointer">
      <details className="text-sm tablet:text-base w-full p-3">
        <summary>
          Get this for low as <span className="font-sans">₹</span>
          {Math.floor(productPrice / 2)}
        </summary>
        <p className="ml-4 mt-2 text-xs tablet:text-sm border border-gray-500 p-2">
          Flat{" "}
          <span className="font-sans font-semibold">₹{productPrice / 2}</span>{" "}
          Instant Cashback on Paytm Wallet. Min Order Value{" "}
          <span className="font-sans font-semibold">₹1000</span> Valid once per
          Paytm account
        </p>
      </details>
    </div>
  );
};

export default ProductOfferDetails;
