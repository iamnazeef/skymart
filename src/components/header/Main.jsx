import { useState } from "react";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import SubNavbar from "./SubNavbar";

const Main = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="Header bg-blue-600 text-white fixed top-0 w-full z-20">
      <div className="main-navbar">
        <MainNavbar setShowNavbar={setShowNavbar} />
      </div>
      <div className="sub-navbar">
        <SubNavbar />
      </div>
      <div className="mobile-navbar">
        <MobileNavbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      </div>
    </div>
  );
};

export default Main;
