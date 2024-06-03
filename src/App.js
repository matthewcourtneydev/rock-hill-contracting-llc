import { useState } from "react";
import "./App.scss";
import NavbarLg from "./components/navbar-lg/navbar-lg";
import NavbarSm from "./components/navbar-sm/navbar-sm";
import NavMenu from "./components/nav-menu/nav-menu";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";

function App() {
  const [isNavMenuOpen, toggleNavMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("home")
  return (
    <div className="App">
      <NavbarLg />
      <NavbarSm isNavMenuOpen={isNavMenuOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleNavMenu={toggleNavMenu} />
      {isNavMenuOpen ? <NavMenu /> : <></>}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
