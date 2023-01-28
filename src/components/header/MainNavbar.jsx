import { Link, useNavigate } from "react-router-dom";
import SkymartIcon from "/favicon/cloudy.png";
import scrollToTop from "../ScrollToTop";
import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { signInContext } from "../../context/SignInModalContext";
import MenuIcon from "./icons/MainNavbarIcons/MenuIcon";
import DepartmentsIcon from "./icons/MainNavbarIcons/DepartmentsIcon";
import ServicesIcon from "./icons/MainNavbarIcons/ServicesIcon";
import SearchIcon from "./icons/MainNavbarIcons/SearchIcon";
import FavouritesIcon from "./icons/MainNavbarIcons/FavouritesIcon";
import UserIcon from "./icons/MainNavbarIcons/UserIcon";
import ShoppingCartIcon from "./icons/MainNavbarIcons/ShoppingCartIcon";
const body = document.querySelector("body");

const MainNavbar = ({ setShowNavbar }) => {
  const { cartFunctions } = useContext(cartContext);
  const [active, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { setIsOpen } = useContext(signInContext);

  const getSearchResults = () => {
    navigate(`/search?q=${searchQuery}`);
  };

  //Sign-In Modal
  const handleSignIn = () => {
    setIsOpen(true);
  };

  //Side - NavBar - Mobile
  const handleNavbar = () => {
    setShowNavbar(true);
    body.classList.add("active");
  };

  const handleLogoClick = () => {
    scrollToTop();
  };

  return (
    <div className="Main-Navbar z-20 flex space-x-2 p-4 items-center justify-center">
      <MenuIcon handleNavbar={handleNavbar} />
      <Link
        to="/"
        className="laptop:flex laptop:items-center laptop:space-x-3 hover:bg-blue-800 laptop:py-2 laptop:px-4 laptop:rounded-full"
        onClick={handleLogoClick}
      >
        <h1 className="hidden laptop:block laptop:text-[1.35rem] laptop:font-semibold">
          Skymart
        </h1>
        <img src={SkymartIcon} alt="Logo of Skymart" className="max-w-[40px]" />
      </Link>
      <nav className="nav relative flex items-center justify-between space-x-2 w-full">
        <Link
          to="/"
          aria-label="Navigate to departments"
          className="departments hidden laptop:flex items-center space-x-1 p-4 rounded-full hover:bg-blue-800"
        >
          <DepartmentsIcon />
          <p>Departments</p>
        </Link>
        <Link
          to="/"
          aria-label="Navigate to services"
          className="services hidden laptop:flex items-center space-x-1 p-4 rounded-full hover:bg-blue-800"
        >
          <ServicesIcon />
          <p>Services</p>
        </Link>
        <div
          className={`search flex rounded-full bg-white p-[0.3rem] w-full ${
            active ? "absolute z-10 left-0" : "relative"
          }`}
          onFocus={() => {
            if (window.screen.width < 600) setActive(true);
          }}
          onBlur={() => setActive(false)}
        >
          <input
            type="search"
            placeholder={`${
              window.screen.width < 1280
                ? "Search Skymart"
                : "Search everything at Skymart online and in store"
            }`}
            className="rounded-full w-full p-1 outline-none text-black placeholder:text-sm placeholder:text-gray-500 desktop:px-3"
            id="search"
            autoComplete="off"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={(e) => (e.code === "Enter" ? getSearchResults() : "")}
          />
          <button
            className="search-icon border border-yellow-300 bg-yellow-400 text-black rounded-full p-1 cursor-pointer"
            aria-label="Nearch"
            onClick={() => {
              if (searchQuery) {
                getSearchResults();
                setActive(false);
              }
            }}
          >
            <SearchIcon />
          </button>
        </div>
        <Link
          to="/"
          aria-label="Navigate to reorder products"
          className="reorder hidden laptop:flex items-center space-x-2 p-3 rounded-full min-w-[120px] ml-3 hover:bg-blue-800"
        >
          <FavouritesIcon />
          <p className="text-xs">
            Reorder <br /> <span className="font-semibold">My Items</span>
          </p>
        </Link>
        <Link
          onClick={handleSignIn}
          aria-label="Nign in or login in to skymart"
          className="account hidden laptop:flex items-center p-3 w-[120px] rounded-full space-x-2 hover:bg-blue-800"
        >
          <UserIcon />
          <p className="text-xs">
            Sign In <span className="font-semibold">Account</span>
          </p>
        </Link>
        <Link
          to={"/cart"}
          aria-label="Navigate to cart"
          className="py-1 px-5 relative rounded-full hover:bg-blue-800"
        >
          <div className="text-black font-semibold border border-orange-600 absolute right-4 h-[0.92rem] w-[0.92rem] text-center text-[0.6rem] bg-yellow-400 rounded-full">
            {cartFunctions && cartFunctions.cartItems.size}
          </div>
          <ShoppingCartIcon />
          <p className="text-white text-[0.6rem] text-center">
            <span className="font-sans">₹</span>
            {cartFunctions && cartFunctions.totalPrice > 0
              ? cartFunctions.totalPrice
              : "0.00"}
          </p>
        </Link>
      </nav>
    </div>
  );
};

export default MainNavbar;
