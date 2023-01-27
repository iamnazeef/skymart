const discountedPrice = (itemPrice, itemDiscountPercentage) => {
  const price = Math.floor(
    itemPrice - (itemPrice * itemDiscountPercentage) / 100
  );
  return price;
};

export default discountedPrice;
