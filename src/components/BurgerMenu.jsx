import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../styles/BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      right
      isOpen={isOpen}
      onStateChange={(state) => setIsOpen(state.isOpen)}
    >
      <Link className="menu-item" to="/" onClick={handleMenuClose}>
        Home
      </Link>
      <Link className="menu-item" to="/about" onClick={handleMenuClose}>
        À propos
      </Link>
      <Link className="menu-item" to="/projects" onClick={handleMenuClose}>
        Projet
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
