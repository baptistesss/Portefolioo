import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import NasaModale from "./Pages/HarryPotterModale.jsx";
import BurgerMenu from "./components/BurgerMenu.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/App.css";

const Layout = () => {
  return (
    <div>
      <BurgerMenu />
      <nav className="desktop-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About me</Link>
          </li>
          <li>
            <Link to="/Projects">Projets</Link>
          </li>
          <li>
            <Link to="/NasaModale">Harry-Potter</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="NasaModale" element={<NasaModale />} />
      </Route>
    </Routes>
  );
}

export default App;
