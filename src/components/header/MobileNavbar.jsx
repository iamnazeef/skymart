import { useContext } from "react";
import { Link } from "react-router-dom";
import SkymartIcon from "/favicon/cloudy.png";
import { signInContext } from "../../context/SignInModalContext";
import CloseNavbarIcon from "./icons/MobileNavbarIcons/CloseNavbarIcon";
import MyItemsIcon from "./icons/MobileNavbarIcons/MyItemsIcon";
import PurchaseHistoryIcon from "./icons/MobileNavbarIcons/PurchaseHistoryIcon";
import UserAccountIcon from "./icons/MobileNavbarIcons/UserAccountIcon";
import HelpIcon from "./icons/MobileNavbarIcons/HelpIcon";
import ListsIcon from "./icons/MobileNavbarIcons/ListsIcon";
import RegistriesIcon from "./icons/MobileNavbarIcons/RegistriesIcon";
import DepartmentsIcon from "./icons/MobileNavbarIcons/DepartmentsIcon";
import RightChevron from "./icons/MobileNavbarIcons/RightChevron";
import ServicesIcon from "./icons/MobileNavbarIcons/ServicesIcon";
import GiveFeedbackIcon from "./icons/MobileNavbarIcons/GiveFeedbackIcon";
const body = document.querySelector("body");

const MobileNavbar = ({ showNavbar, setShowNavbar }) => {
  const { setIsOpen } = useContext(signInContext);

  //SideNav
  const handleNavbarClose = () => {
    setShowNavbar(false);
    body.classList.remove("active");
  };

  // Sign-In Modal
  const handleSignIn = () => {
    setIsOpen(true);
  };

  return (
    <nav
      className={`${
        showNavbar ? "translate-x-0" : "translate-x-[-100%]"
      } Navbar bg-white fixed z-20 top-0 w-full min-h-screen p-5 pt-14 transition-transform duration-[0.25s] ease-linear overflow-auto tablet:px-20 tablet:pt-20 text-gray-600`}
    >
      <div className="header flex items-center space-x-5 justify-between">
        <div className="flex items-center space-x-3">
          <img src={SkymartIcon} alt="Skymart logo" className="w-10" />
          <Link
            className="userAccount text-xs font-semibold text-white bg-blue-600 py-2 px-3 rounded-full hover:bg-blue-800"
            onClick={handleSignIn}
          >
            Sign in or create account
          </Link>
        </div>
        <div onClick={handleNavbarClose}>
          <CloseNavbarIcon />
        </div>
      </div>
      <div className="body mt-12">
        <Link
          to="/"
          className="text-base font-semibold bg-gradient-to-r bg-clip-text text-transparent from-pink-500 to-yellow-500"
        >
          Join Skymart+
        </Link>
        <hr className="my-5" />
        <ul className="flex flex-col space-y-6">
          <li>
            <Link to="/" className="flex items-center space-x-2">
              <PurchaseHistoryIcon />
              <p className="text-sm">Purchase History</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center space-x-2">
              <MyItemsIcon />
              <p className="text-sm">My Items</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center space-x-2">
              <UserAccountIcon />
              <p className="text-sm">Account</p>
            </Link>
          </li>
        </ul>
        <hr className="my-5" />
        <Link to="/" className="flex items-center space-x-2">
          <HelpIcon />
          <p className="text-sm">Help</p>
        </Link>
        <hr className="my-5" />
        <ul className="flex flex-col space-y-6">
          <li>
            <Link href="#" className="flex items-center space-x-2">
              <ListsIcon />
              <p className="text-sm">Lists</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center space-x-2">
              <RegistriesIcon />
              <p className="text-sm">Registries</p>
            </Link>
          </li>
        </ul>
        <hr className="my-5" />
        <ul className="flex flex-col space-y-6">
          <li>
            <Link to="/" className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DepartmentsIcon />
                <p className="text-sm">Departments</p>
              </div>
              <div>
                <RightChevron />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ServicesIcon />
                <p className="text-sm">Services</p>
              </div>
              <div>
                <RightChevron />
              </div>
            </Link>
          </li>
        </ul>
        <hr className="my-5" />
        <Link to="/" className="flex items-center space-x-2">
          <GiveFeedbackIcon />
          <p className="text-sm">Give Feedback</p>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
