import ProductImages from "./ProductImages";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductOfferDetails from "./ProductOfferDetails";
import ProductPopularity from "./ProductPopularity";
import ProductInStock from "./ProductInStock";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductDescription from "./ProductDescription";
import SimilarProducts from "./SimilarProducts";
import SkeletonLoader from "./SkeletonLoader";
import CheckoutAndCart from "./CheckoutAndCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MobileAndTabletView = ({ productDetails, showSkeleton }) => {
  const notify = () => {
    toast.success("Product added successfully", {
      position: "top-center",
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
        productDetails.description &&
        productDetails.rating &&
        productDetails.price &&
        productDetails.discountPercentage &&
        productDetails.stock &&
        productDetails.category && (
          <section className="pt-3 tablet:px-10">
            <ProductImages
              productImages={productDetails.images || " "}
              productTitle={productDetails.title}
            />
            <FavoriteBorderIcon
              className="absolute top-5 z-10 right-5 laptop:mr-14 cursor-pointer shadow-cardShadow rounded-full p-1 bg-white"
              onClick={(event) => {
                event.stopPropagation();
                console.log("added to favorite");
              }}
              style={{
                fontSize: "30px",
                color: "gray",
              }}
              titleAccess="Add to favourites"
            />
            <section className="product-info p-3">
              <section className="product-title-and-description">
                <h2 className="title font-semibold text-lg">
                  {productDetails.title || " "}
                </h2>
                <p className="description text-xs tablet:text-sm mt-1 w-full max-w-[600px] text-gray-600">
                  {productDetails.description || " "}
                </p>
              </section>
              <ProductRating productRating={productDetails.rating} />
              <ProductPrice
                ProductPrice={productDetails.price}
                productDiscount={productDetails.discountPercentage}
              />
              <ProductInStock productStock={productDetails.stock} />
            </section>
            <ProductOfferDetails productPrice={productDetails.price} />
            <ProductPopularity />
            <ProductDescription
              ProductDescription={productDetails.description}
            />

            {/* Add to cart and buy product */}
            <CheckoutAndCart productDetails={productDetails} notify={notify} />
            <hr />

            {/* Similar Products  */}
            <p className="p-3 text-sm tablet:text-base font-medium">
              Similar Products
            </p>
            <SimilarProducts category={productDetails.category} />
            <ToastContainer
              position="top-center"
              autoClose={1500}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme="colored"
              className="mt-[7.5rem]"
            />
          </section>
        )}
    </>
  );
};

export default MobileAndTabletView;
