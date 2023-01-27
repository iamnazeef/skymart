import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import scrollToTop from "../ScrollToTop";
import MobileAndTabletView from "./MobileAndTabletView";
import LaptopAndDesktopView from "./LaptopAndDesktopView";

const Main = () => {
  const { pid } = useParams("pid");
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [productDetails, setProductDetails] = useState({
    brand: "",
    category: "",
    description: "",
    discountPercentage: "",
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: "",
    title: "",
  });

  const getProductDetails = async () => {
    try {
      let response = await fetch(`https://dummyjson.com/products/${pid}`);
      response = await response.json();
      setProductDetails({
        brand: response.brand,
        category: response.category,
        description: response.description,
        discountPercentage: response.discountPercentage,
        id: response.id,
        images: response.images,
        price: response.price,
        rating: response.rating,
        stock: response.stock,
        thumbnail: response.thumbnail,
        title: response.title,
      });
      setShowSkeleton(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    scrollToTop();
    getProductDetails();
  }, [pid]);

  return (
    <div className="mt-[125px] relative">
      <div className="laptop:hidden">
        <MobileAndTabletView
          productDetails={productDetails}
          showSkeleton={showSkeleton}
        />
      </div>
      <div className="hidden laptop:block">
        <LaptopAndDesktopView
          productDetails={productDetails}
          showSkeleton={showSkeleton}
        />
      </div>
    </div>
  );
};

export default Main;
