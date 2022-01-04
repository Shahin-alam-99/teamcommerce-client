import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartContainer from "./Components/Cart/CartContainer/CartContainer";
import CheckoutContainer from "./Components/Checkout/CheckoutContainer/CheckoutContainer";
import ErrorPage from "./Components/Common/Shared/ErrorPage/ErrorPage";
import HomeContainer from "./Components/Home/HomeContainer/HomeContainer";
import ProductModal from "./Components/ProductModal/ProductModal";
import Login from "./Pages/Form/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
          <Route path="/product" element={<ProductModal />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
