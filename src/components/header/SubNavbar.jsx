import ChevronIcon from "./icons/SubNavbarIcons/ChevronIcon";
import MapPinIcon from "./icons/SubNavbarIcons/MapPinIcon";
import ChevronDownIcon from "./icons/SubNavbarIcons/ChevronDownIcon";
import WarehouseIcon from "./icons/SubNavbarIcons/WarehouseIcon";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
    <section className="SubsectionAppbar py-2 px-4 laptop:px-8 laptop:flex items-center justify-between laptop:border-t border-white">
      <section className="flex p-1 items-center max-w-[588px] w-full">
        <p className="delivery-options text-xs font-semibold flex items-center">
          How do you want your items?
          <ChevronIcon />
        </p>
        <p className="mx-1 text-sm">|</p>
        <section className="location flex items-center">
          <MapPinIcon />
          <p className="text-xs font-medium flex items-center">
            <span className="hidden tablet:block mr-1">Sacramento,</span>95829
            <ChevronDownIcon />
          </p>
          <WarehouseIcon />
          <p className="hidden tablet:block text-xs font-extralight">
            Sacramento Supercenter
          </p>
        </section>
      </section>
      <nav>
        <ul className="hidden laptop:flex items-center space-x-6 font-semibold text-[0.8rem]">
          <li>
            <Link
              to="/"
              className="hover:underline"
              aria-label="Navigate to Clearance"
            >
              Clearance
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline"
              aria-label="Navigate to Gift cards"
            >
              Gift cards
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline"
              aria-label="Navigate to Tech"
            >
              Tech
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline"
              aria-label="Navigate to Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline"
              aria-label="Navigate to Toys"
            >
              Toys
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hidden desktop:block hover:underline"
              aria-label="Navigate to Grocery & essentials"
            >
              Grocery & essentials
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hidden desktop:block hover:underline"
              aria-label="Navigate to Apparel"
            >
              Apparel
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hidden desktop:block hover:underline"
              aria-label="Navigate to Skymart+"
            >
              Skymart+
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default SubNavbar;
