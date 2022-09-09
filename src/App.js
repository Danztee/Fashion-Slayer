import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import OneProducts from "./components/Products/OneProducts";
import SecProducts from "./components/Products/SecProducts";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";
// import ProductView from "./components/ProductView/productView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <div className="container">
        <Products />
        <OneProducts />
        <SecProducts />
      </div>
      <img src="./images/ad.png" alt="ad" className="ad" />
      <Support />
      <Footer />
      {/* <ProductView /> */}
    </div>
  );
}

export default App;
