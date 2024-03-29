import { useContext, useEffect } from "react";
import CartProductsTemplate from "../components/cart/CartProductsTemplate";
import EmptyCart from "../assets/empty-cart-img/empty-cart.jpg";
import Checkout from "../components/cart/Checkout";
import scrollToTop from "../utils/ScrollToTop";
import { cartContext } from "../context/CartContext";

const Cart = () => {
  const { cartFunctions } = useContext(cartContext);
  useEffect(() => scrollToTop(), []);

  return (
    <section className="relative min-h-[90vh] mt-[7.6rem] tablet:mt-[8.5rem] p-4">
      <section className="page-name my-2">
        <h1 className="text-2xl font-semibold">Cart</h1>
      </section>
      {cartFunctions && cartFunctions.cartItems.size > 0 && (
        <section className="checkout bg-blue-700 p-3 rounded-lg z-10 fixed bottom-3 right-3 drop-shadow-lg min-w-[200px] tablet:min-w-[250px]">
          <Checkout />
        </section>
      )}
      {cartFunctions && cartFunctions.cartItems.size > 0 ? (
        <section className="products w-full max-w-[1000px] mx-auto">
          <section className="MobileView grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-2">
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
          </section>
        </section>
      ) : (
        <section className="empty-cart min-h-[70vh] w-full flex flex-col items-center justify-center">
          <img
            src={EmptyCart}
            alt="Your cart is empty."
            className="w-full max-w-[400px] laptop:max-w-[360px]"
          />
          <p className="my-5 text-lg font-semibold text-gray-600 ">
            Wow so empty...
          </p>
        </section>
      )}
    </section>
  );
};

export default Cart;
