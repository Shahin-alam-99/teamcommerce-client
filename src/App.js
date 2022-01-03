import "./App.css";
import HeaderContainer from "./Components/Common/Shared/Header/HeaderContainer/HeaderContainer";
import Carousel from "./Components/Home/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Carousel></Carousel>
    </div>
  );
}

export default App;
