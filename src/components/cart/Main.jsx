import { useContext, useEffect } from "react";
import CartProductsTemplate from "./CartProductsTemplate";
import EmptyCart from "../../assets/empty-cart-img/empty-cart.jpg";
import Checkout from "./Checkout";
import scrollToTop from "../ScrollToTop";
import { cartContext } from "../../context/CartContext";

const Main = () => {
  const { cartFunctions } = useContext(cartContext);
  useEffect(() => scrollToTop(), []);

  return (
    <div className="relative min-h-[90vh]">
      <div className="page-name my-2">
        <h1 className="text-2xl font-semibold">Cart</h1>
      </div>
      {cartFunctions && cartFunctions.cartItems.size > 0 && (
        <div className="checkout bg-blue-700 p-3 rounded-lg z-10 fixed bottom-3 right-3 drop-shadow-lg min-w-[200px] tablet:min-w-[250px]">
          <Checkout />
        </div>
      )}
      {cartFunctions && cartFunctions.cartItems.size > 0 ? (
        <div className="products w-full max-w-[1000px] mx-auto">
          <div className="MobileView grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-2">
            {Array(cartFunctions.cartItems.size)
              .fill()
              .map((data, index) => {
                return (
                  <CartProductsTemplate
                    productId={
                      Array.from(cartFunctions.cartItems.keys())[index]
                    }
                    key={index}
                  />
                );
              })}
          </div>
        </div>
      ) : (
        <div className="empty-cart min-h-[70vh] w-full flex flex-col items-center justify-center">
          <img
            src={EmptyCart}
            alt="Your cart is empty."
            className="w-full max-w-[400px] laptop:max-w-[360px]"
          />
          <p className="my-5 text-lg font-semibold text-gray-600 ">
            Wow so empty...
          </p>
        </div>
      )}
    </div>
  );
};

export default Main;
