import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/Common/Shared/ErrorPage/ErrorPage";
import HomeContainer from "./Components/Home/HomeContainer/HomeContainer";

import Login from "./Pages/Form/Login/Login";
import Register from "./Pages/Form/Register/Register";
import Authprovider from "./Pages/Context/Authprovider";


function App() {
  return (
    <div className="App">
      <Authprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      </Authprovider>
    </div>
  );
}


export default App;
