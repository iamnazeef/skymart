import { useState } from "react";
import FeedbackAndOrderInfo from "./FeedbackAndOrderInfo";
import FlashPicks from "./FlashPicks";
import Products from "./Products";
import SkeletonLoader from "./SkeletonLoader";
import SkymartPlus from "./SkymartPlus";
import Slides from "./Slides";
import SpecialOffers from "./SpecialsOffers";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  const categoriesAndEndpoints = [
    {
      endpoint: "skincare",
      categoryHeading: "Skincare",
    },
    {
      endpoint: "groceries",
      categoryHeading: "Groceries",
    },
    {
      endpoint: "home-decoration",
      categoryHeading: "Home decoration",
    },
    {
      endpoint: "smartphones",
      categoryHeading: "Smartphones",
    },
    {
      endpoint: "mens-shirts",
      categoryHeading: "Mens shirts",
    },
    {
      endpoint: "womens-dresses",
      categoryHeading: "Womens dresses",
    },
    {
      endpoint: "womens-jewellery",
      categoryHeading: "Womens jewellery",
    },
    {
      endpoint: "sunglasses",
      categoryHeading: "Sunglasses",
    },
  ];

  return (
    <section className="home-container px-3 tablet:px-12 laptop:px-[4rem] mt-[7.6rem] tablet:mt-[8.5rem] min-w-full">
      <section className="tablet:flex tablet:space-x-3">
        <Slides />
        <FlashPicks />
      </section>
      <SpecialOffers />
      <SkymartPlus />

      {/* Clearance products */}
      {isLoading && <SkeletonLoader cards={20} />}
      <Products
        category={"Clearance"}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        isClearanceSale={true}
      />

      {/* Products mentioned in the categoriesAndEndpoints Array Object */}
      {Array(categoriesAndEndpoints.length)
        .fill()
        .map((data, index) => (
          <section key={index}>
            {isLoading && <SkeletonLoader cards={20} />}
            <Products
              category={categoriesAndEndpoints[index].categoryHeading}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              isClearanceSale={false}
              endpoint={categoriesAndEndpoints[index].endpoint}
            />
          </section>
        ))}

      <FeedbackAndOrderInfo />
    </section>
  );
};

export default Main;
