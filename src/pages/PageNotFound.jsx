import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFoundJPG from "../assets/page-not-found/page-not-found.jpg";
import scrollToTop from "../components/ScrollToTop";

const PageNotFound = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <main className="page-not-found mt-10 min-h-[100vh] w-full flex flex-col items-center justify-center ">
      <img
        src={PageNotFoundJPG}
        className="w-full max-w-[500px] h-[280px] object-cover"
      />
      <em className="w-full max-w-[500px] px-5 text-xs tablet:text-sm">
        Oops, looks like you've taken a detour to nowhere. But don't worry, we
        have a map to guide you back home.
      </em>
      <Link
        to={"/"}
        className="mt-3 border-2 border-blue-600 p-2 rounded-md bg-blue-600 text-white font-medium drop-shadow-xl hover:drop-shadow-none"
      >
        Take me home
      </Link>
    </main>
  );
};

export default PageNotFound;
