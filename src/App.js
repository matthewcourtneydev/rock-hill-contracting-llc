import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import Hardscape from "./pages/hardscape/hardscape";
import Contact from "./pages/contact/contact"
import Portfolio from "./pages/portfolio/portfolio";
import Testimonials from "./pages/testimonials/testimonials";
import { Routes, Route } from "react-router-dom";
import logo from "./imgs/logo.png"

function App() {
  const [isNavMenuOpen, toggleNavMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  const navigate = useNavigate();
  function navigateTo(route) {
    setCurrentPage((prev) => route);
    if (isNavMenuOpen) {
      toggleNavMenu((prev) => false)
    }
    navigate(route)
  }
  return (
    <div className="App">
      <NavbarSm navigateTo={navigateTo} isNavMenuOpen={isNavMenuOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleNavMenu={toggleNavMenu} />
      {isNavMenuOpen ? <NavMenu navigateTo={navigateTo} toggleNavMenu={toggleNavMenu} currentPage={currentPage} /> : <></>}
      <NavbarLg navigateTo={navigateTo} isNavMenuOpen={isNavMenuOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleNavMenu={toggleNavMenu}/>
      <Routes>
        <Route path={"/"} element={<Home isNavMenuOpen={isNavMenuOpen} currentPage={currentPage} setCurrentPage={setCurrentPage} toggleNavMenu={toggleNavMenu}/>}/>
        <Route path={"/about"} element={<About/>} />
        <Route path={"/interior"} element={<Interior/>} />
        <Route path={"/exterior"} element={<Exterior/>} />
        <Route path={"/patios"} element={<Patio/>} />
        <Route path={"/hardscape"} element={<Hardscape/>} />
        <Route path={"/contact"} element={<Contact/>} />
        <Route path={"/portfolio"} element={<Portfolio/>} />
        <Route path={"/testimonials"} element={<Testimonials/>} />
      </Routes>
      
      <Footer navigateTo={navigateTo}/>
    </div>
  );
}

export default App;
