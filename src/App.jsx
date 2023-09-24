import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Header/Footer";

function App() {
  return (
    <>
      <div className="w-10/12 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
