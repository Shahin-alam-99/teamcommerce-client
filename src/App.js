import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import CartContainer from "./Components/Cart/CartContainer/CartContainer";
import CheckoutContainer from "./Components/Checkout/CheckoutContainer/CheckoutContainer";
import ErrorPage from "./Components/Common/Shared/ErrorPage/ErrorPage";
import Footer from "./Components/Common/Shared/Footer/Footer";
import HeaderContainer from "./Components/Common/Shared/Header/HeaderContainer/HeaderContainer";
import ContactUs from "./Components/ContactUs/ContactUs";
import HomeContainer from "./Components/Home/HomeContainer/HomeContainer";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import ProductsContainer from "./Components/Products/ProductsContainer/ProductsContainer";
import Catagories from "./Pages/Catagories/Catagories";
import Authprovider from "./Pages/Context/Authprovider";
import Login from "./Pages/Form/Login/Login";
import Register from "./Pages/Form/Register/Register";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <HeaderContainer></HeaderContainer>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/home" element={<HomeContainer />} />
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            <Route path="/catagories" element={<Catagories />} />

            <Route path="/cart" element={<CartContainer />} />
            <Route
              path="/checkout"
              element={
                <PrivetRoute>
                  <CheckoutContainer />
                </PrivetRoute>
              }
            />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route path="/products" element={<ProductsContainer />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
