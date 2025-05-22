import React from "react";

const NavBar = () => {
      return (
    <nav className="navbar">
      <div className="emyhouse">Emy's House</div>
      <ul className="presentation">
        <li><a href="#" className="accueil">Accueil</a></li>
        <li><a href="#" className="propos">À propos</a></li>
        <li><a href="#" className="menu">Menu</a></li>
        <li><a href="#" className="contact">Contact</a></li>
      </ul>
    </nav>
  );
};


export default NavBar;