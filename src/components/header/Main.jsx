import { useState } from "react";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import SubNavbar from "./SubNavbar";

const Main = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header className="Header bg-blue-600 text-white fixed top-0 w-full z-20">
      <section className="main-navbar">
        <MainNavbar setShowNavbar={setShowNavbar} />
      </section>
      <section className="sub-navbar">
        <SubNavbar />
      </section>
      <section className="mobile-navbar">
        <MobileNavbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      </section>
    </header>
  );
};

export default Main;
