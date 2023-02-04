import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import MinusIcon from "../cart/icons/MinusIcon";

const CartProductsTemplate = ({ productId }) => {
  const { cartFunctions } = useContext(cartContext);
  const { cartItems, updateCart } = cartFunctions;

  //function to increase and decrease product quantity.
  const handleUpdate = (pId, isAdd) => {
    updateCart(pId, isAdd);
  };

  return (
    <>
      <section className="image h-[105px] w-full mt-2 flex items-center relative rounded-md tablet:max-w-[300px] mx-auto tablet:border tablet:border-gray-700 tablet:p-1 tablet:min-h-[150px]">
        <section className="product-image w-[35%] h-[100px]">
          <img
            src={cartItems.get(productId).thumbnail}
            className="h-[100px] w-full object-contain rounded-tl-md rounded-bl-md"
            alt={cartItems.get(productId).title}
          />
        </section>
        <section className="product-details w-[65%] h-[100px] rounded-tr-md rounded-br-md relative p-2">
          <section className="product-title">
            <h2 className="text-sm font-medium">
              {cartItems.get(productId).title}
            </h2>
          </section>
          <section className="quantity-and-price flex items-center flex-wrap justify-between h-[70px]">
            <section className="quantity flex items-center space-x-2 border border-gray-600 rounded-md bg-gray-100 p-[0.10rem]">
              <button onClick={() => handleUpdate(productId, false)}>
                <MinusIcon />
              </button>
              <span className="font-medium text-xl">
                {cartItems.get(productId).quantity}
              </span>
              <button onClick={() => handleUpdate(productId, true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus border border-black rounded-full m-1 bg-white text-black drop-shadow-sm cursor-pointer shadow-cardShadow"
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
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </section>
            <section className="price flex items-center space-x-2">
              <p className="original-price text-base text-gray-700 line-through font-normal">
                <span className="font-sans">₹</span>
                {cartItems.get(productId).price *
                  cartItems.get(productId).quantity}
              </p>
              <p className="discountedPrice text-xl font-medium text-black">
                <span className="font-sans">₹</span>
                {cartItems.get(productId).discountPrice *
                  cartItems.get(productId).quantity}
              </p>
            </section>
          </section>
        </section>
      </section>
      <hr className="h-1 mt-2 border-gray-400 mx-auto w-full max-w-[90%] tablet:hidden" />
    </>
  );
};

export default CartProductsTemplate;
