import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import ContactPage from "./pages/ContactPage";
import { Cart } from "./pages/cart/cart";
import Footerpage from "./pages/Footerpage"
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footerpage/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
