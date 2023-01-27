import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Main";
import Header from "./components/header/Main";
import ProductDetails from "./components/product-details/Main";
import ViewAllProducts from "./pages/ViewAllProducts";
import PageNotFound from "./pages/PageNotFound";
import CartProvider from "./context/CartContext";
import SignInProvider from "./context/SignInModalContext";
import Search from "./pages/Search";
import SignInModal from "./components/sign-in-modal/Main";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <CartProvider>
        <SignInProvider>
          <Header />
          <SignInModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="view_all_products" element={<ViewAllProducts />} />
            <Route path="product_details/:pid" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </SignInProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
