import ChevronIcon from "./icons/SubNavbarIcons/ChevronIcon";
import MapPinIcon from "./icons/SubNavbarIcons/MapPinIcon";
import ChevronDownIcon from "./icons/SubNavbarIcons/ChevronDownIcon";
import WarehouseIcon from "./icons/SubNavbarIcons/WarehouseIcon";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div className="SubsectionAppbar py-2 px-4 laptop:px-8 laptop:flex items-center justify-between laptop:border-t border-white">
      <div className="flex p-1 items-center max-w-[588px] w-full">
        <p className="delivery-options text-xs font-semibold flex items-center">
          How do you want your items?
          <ChevronIcon />
        </p>
        <p className="mx-1 text-sm">|</p>
        <div className="location flex items-center">
          <MapPinIcon />
          <p className="text-xs font-medium flex items-center">
            <span className="hidden tablet:block mr-1">Sacramento,</span>95829
            <ChevronDownIcon />
          </p>
          <WarehouseIcon />
          <p className="hidden tablet:block text-xs font-extralight">
            Sacramento Supercenter
          </p>
        </div>
      </div>
      <nav className="hidden laptop:flex items-center space-x-6 font-semibold text-[0.8rem]">
        <Link
          to="/"
          className="hover:underline"
          aria-label="Navigate to Clearance"
        >
          Clearance
        </Link>
        <Link
          to="/"
          className="hover:underline"
          aria-label="Navigate to Gift cards"
        >
          Gift cards
        </Link>
        <Link to="/" className="hover:underline" aria-label="Navigate to Tech">
          Tech
        </Link>
        <Link to="/" className="hover:underline" aria-label="Navigate to Home">
          Home
        </Link>
        <Link to="/" className="hover:underline" aria-label="Navigate to Toys">
          Toys
        </Link>
        <Link
          to="/"
          className="hidden desktop:block hover:underline"
          aria-label="Navigate to Grocery & essentials"
        >
          Grocery & essentials
        </Link>
        <Link
          to="/"
          className="hidden desktop:block hover:underline"
          aria-label="Navigate to Apparel"
        >
          Apparel
        </Link>
        <Link
          to="/"
          className="hidden desktop:block hover:underline"
          aria-label="Navigate to Skymart+"
        >
          Skymart+
        </Link>
      </nav>
    </div>
  );
};

export default SubNavbar;
