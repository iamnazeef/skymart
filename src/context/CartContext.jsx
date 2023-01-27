import { useState, createContext } from "react";
export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(new Map());
  const [totalPrice, setTotalPrice] = useState(0);

  const incrementProductQuantity = (itemId, productDetails) => {
    setCartItems(
      new Map(
        cartItems.set(itemId, {
          ...productDetails,
          quantity: productDetails.quantity + 1,
        })
      )
    );
    setTotalPrice((prev) => prev + productDetails.discountPrice);
  };

  const deleteProduct = (itemId, productDetails) => {
    cartItems.delete(itemId);
    setCartItems(new Map(cartItems));
    setTotalPrice((prev) => prev - productDetails.discountPrice);
  };

  const decrementProductQuantity = (itemId, productDetails) => {
    setCartItems(
      new Map(
        cartItems.set(itemId, {
          ...productDetails,
          quantity: productDetails.quantity - 1,
        })
      )
    );
    setTotalPrice((prev) => prev - productDetails.discountPrice);
  };

  const updateCart = (itemId, isAdd) => {
    const productDetails = cartItems.get(itemId);
    if (isAdd) {
      incrementProductQuantity(itemId, productDetails);
    } else if (productDetails.quantity - 1 < 1) {
      deleteProduct(itemId, productDetails);
    } else {
      decrementProductQuantity(itemId, productDetails);
    }
  };

  const addToCart = (itemId, thumbnail, price, title, discountPrice) => {
    setCartItems(
      new Map(
        cartItems.set(itemId, {
          thumbnail: thumbnail,
          price: price,
          title: title,
          quantity: 1,
          discountPrice: discountPrice,
        })
      )
    );
    setTotalPrice((prev) => prev + discountPrice);
  };

  const cartFunctions = {
    addToCart,
    cartItems,
    updateCart,
    totalPrice,
  };

  return (
    <cartContext.Provider value={{ cartFunctions }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
