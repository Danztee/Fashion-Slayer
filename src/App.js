import { useState } from "react";

import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import OneProducts from "./components/Products/OneProducts";
import SecProducts from "./components/Products/SecProducts";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const showCartHandler = () => {
    SetCartIsShown(true);
  };

  const hideCartHandler = () => {
    SetCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <Header />

      <div className="container">
        <Products onShowCart={showCartHandler} />
        <OneProducts onShow={showCartHandler} />
        <SecProducts />
      </div>

      <img src="./images/ad.png" alt="ad" className="ad" />
      <Support />
      <Footer />
    </CartProvider>
  );
}

export default App;
