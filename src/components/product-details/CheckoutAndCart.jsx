import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import discountedPrice from "../discountedPrice.js";

const CheckoutAndCart = ({ productDetails, notify }) => {
  const { cartFunctions } = useContext(cartContext);
  const navigate = useNavigate();

  const handleCart = (itemId, productDetails) => {
    if (cartFunctions.cartItems.has(itemId)) {
      navigate("/cart");
    } else {
      const discountPrice = discountedPrice(
        productDetails.price,
        productDetails.discountPercentage
      );
      cartFunctions.addToCart(
        itemId,
        productDetails.thumbnail,
        productDetails.price,
        productDetails.title,
        discountPrice
      );
      notify();
    }
  };

  return (
    <section className="checkout-and-cart text-white my-2 flex items-center justify-center m-auto tablet:w-[90%] sticky bottom-0 tablet:bottom-2 tablet:space-x-3 z-10">
      <button
        className="add-to-cart w-[50%] bg-yellow-400 hover:bg-yellow-500 p-3 flex items-center justify-center space-x-1 tablet:rounded-md cursor-pointer hover:shadow-productShadow"
        onClick={() => handleCart(productDetails.id, productDetails)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-shopping-cart"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="6" cy="19" r="2"></circle>
          <circle cx="17" cy="19" r="2"></circle>
          <path d="M17 17h-11v-14h-2"></path>
          <path d="M6 5l14 1l-1 7h-13"></path>
        </svg>
        <p>
          {cartFunctions && cartFunctions.cartItems.has(productDetails.id)
            ? "Go to Cart"
            : "Add to Cart"}
        </p>
      </button>
      <button className="buy-product w-[50%] bg-blue-700 hover:bg-blue-800 p-3 flex items-center justify-center space-x-1 tablet:rounded-md hover:shadow-productShadow cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-bolt"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
        </svg>
        <p>Buy Now</p>
      </button>
    </section>
  );
};

export default CheckoutAndCart;
