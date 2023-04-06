import { useState } from "react";
import FeedbackAndOrderInfo from "../components/home/FeedbackAndOrderInfo";
import FlashPicks from "../components/home/FlashPicks";
import Products from "../components/home/Products";
import SkeletonLoader from "../components/home/SkeletonLoader";
import SkymartPlus from "../components/home/SkymartPlus";
import Slides from "../components/home/Slides";
import SpecialOffers from "../components/home/SpecialsOffers";

const Home = () => {
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

export default Home;
