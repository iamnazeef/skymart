import CheckoutAndCart from "./CheckoutAndCart";
import ProductDescription from "./ProductDescription";
import ProductImages from "./ProductImages";
import ProductInStock from "./ProductInStock";
import ProductPopularity from "./ProductPopularity";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import SimilarProducts from "./SimilarProducts";
import SkeletonLoader from "./SkeletonLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LaptopAndDesktopView = ({ productDetails, showSkeleton }) => {
  const notify = () => {
    toast.success("Product added successfully", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      {showSkeleton && <SkeletonLoader />}

      {productDetails.images &&
        productDetails.title &&
        productDetails.price &&
        productDetails.description &&
        productDetails.rating &&
        productDetails.discountPercentage &&
        productDetails.stock &&
        productDetails.category && (
          <section className="laptop-and-desktop-view p-3 flex items-center w-full space-x-8 justify-center">
            <section className="product-image--cart-and-buy pt-4 w-[50%] max-w-[500px] shadow-productShadow rounded-md self-start sticky top-36 p-3">
              <section className="images">
                <ProductImages
                  productImages={productDetails.images || " "}
                  productTitle={productDetails.title}
                />
              </section>

              <section className="cart-and-buy pt-2">
                <CheckoutAndCart
                  productDetails={productDetails}
                  notify={notify}
                />
              </section>
            </section>

            <section className="product-details self-start mt-2 w-full max-w-[500px]">
              <h2 className="text-lg font-medium">{productDetails.title}</h2>
              <p className="text-sm mb-2">{productDetails.description}</p>
              <ProductRating productRating={productDetails.rating} />
              <section className="product-price mt-2">
                <ProductPrice
                  ProductPrice={productDetails.price}
                  productDiscount={productDetails.discountPercentage}
                />
              </section>

              <section className="offers pt-3">
                <h3 className="font-medium text-black underline">
                  Get this for low as <span className="font-sans">₹</span>
                  {Math.floor(productDetails.price / 2)}
                </h3>
                <p className="text-sm">
                  Flat{" "}
                  <span className="font-sans font-semibold">
                    ₹{productDetails.price / 2}
                  </span>{" "}
                  Instant Cashback on Paytm Wallet. Min Order Value{" "}
                  <span className="font-sans font-semibold">₹1000</span> Valid
                  once per Paytm account
                </p>
              </section>

              <section className="stock mt-3 border border-gray-300 rounded-md w-fit">
                <ProductPopularity />
              </section>

              <section className="stocks pt-3">
                <ProductInStock productStock={productDetails.stock} />
              </section>

              <section className="product-details mt-3 p-2 border-2 border-gray-300 w-full max-w-[420px] rounded-md">
                <ProductDescription
                  ProductDescription={productDetails.description}
                />
              </section>

              <section className="similar-products">
                <p className="p-3 text-sm tablet:text-base font-medium">
                  Similar Products
                </p>
                <SimilarProducts category={productDetails.category} />
              </section>
            </section>
            <ToastContainer
              position="bottom-center"
              autoClose={1500}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme="colored"
            />
          </section>
        )}
    </>
  );
};

export default LaptopAndDesktopView;
