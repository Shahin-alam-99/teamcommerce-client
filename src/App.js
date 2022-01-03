import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/Common/Shared/ErrorPage/ErrorPage";
import HomeContainer from "./Components/Home/HomeContainer/HomeContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
