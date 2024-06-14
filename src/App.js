import { useState } from "react";
import "./App.scss";
import NavbarLg from "./components/navbar-lg/navbar-lg";
import NavbarSm from "./components/navbar-sm/navbar-sm";
import NavMenu from "./components/nav-menu/nav-menu";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Interior from "./pages/interior/interior"
import Exterior from "./pages/exterior/exterior";
import Patio from "./pages/patios/patios";
import Contact from "./pages/contact/contact"
import { Routes, Route } from "react-router-dom";

function App() {
  const [isNavMenuOpen, toggleNavMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("home")
  return (
    <div className="App">
      <NavbarSm isNavMenuOpen={isNavMenuOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleNavMenu={toggleNavMenu} />
      {isNavMenuOpen ? <NavMenu toggleNavMenu={toggleNavMenu} /> : <></>}
      <NavbarLg isNavMenuOpen={isNavMenuOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleNavMenu={toggleNavMenu}/>
      <Routes>
        <Route path={"/"} element={<Home isNavMenuOpen={isNavMenuOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleNavMenu={toggleNavMenu}/>}/>
        <Route path={"/about"} element={<About/>} />
        <Route path={"/interior"} element={<Interior/>} />
        <Route path={"/exterior"} element={<Exterior/>} />
        <Route path={"/patios"} element={<Patio/>} />
        <Route path={"/contact"} element={<Contact/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
