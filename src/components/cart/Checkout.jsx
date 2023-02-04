import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cartFunctions } = useContext(cartContext);
  return (
    <section className="flex items-center space-x-3 justify-between text-white text-sm tablet:text-base">
      <p>
        Total: <span className="font-sans mr-[0.05rem]">₹</span>
        {cartFunctions.totalPrice}
      </p>
      <Link className="bg-white text-gray-900 font-medium px-2 py-1 rounded-md drop-shadow-lg hover:bg-yellow-400 hover:drop-shadow-none transition-colors delay-75 ease-in-out">
        Checkout
      </Link>
    </section>
  );
};

export default Checkout;
