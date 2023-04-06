import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const LazyProductDetails = lazy(() => import("./components/product-details/Main"))
const LazyViewAllProducts = lazy(() => import("./pages/ViewAllProducts"))
import PageNotFound from "./pages/PageNotFound";
import CartProvider from "./context/CartContext";
import SignInProvider from "./context/SignInModalContext";
const LazySearch = lazy(() => import("./pages/Search"))
import SignInModal from "./components/sign-in-modal/Main";
import Home from "./pages/Home";
const LazyCart = lazy(() => import("./pages/Cart"))
import ViewAllProductsSkeletonLoader from "./components/view-all-products/SkeletonLoader";
import ProductDetailsSkeletonLoader from "./components/product-details/SkeletonLoader";
import LoadingSpinner from "./assets/loading-gif/loading-gif.gif";

function App() {
  return (
    <Router>
      <CartProvider>
        <SignInProvider>
          <Header />
          <SignInModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="view_all_products" element={
            <Suspense fallback={<ViewAllProductsSkeletonLoader />}>
              <LazyViewAllProducts />
            </Suspense>} />
            <Route path="product_details/:pid" element={
            <Suspense fallback={<ProductDetailsSkeletonLoader />}>
              <LazyProductDetails />
            </Suspense>} />
            <Route path="cart" element={<Suspense fallback={<img src={LoadingSpinner} className="mx-auto w-[75px]" alt="loading..." />}>
              <LazyCart />
            </Suspense>} />
            <Route path="search" element={
            <Suspense fallback={<img src={LoadingSpinner} className="mx-auto w-[75px]" alt="loading..." />}>
              <LazySearch />
            </Suspense>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </SignInProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
