import { useState } from "react";
import { Link } from "react-router-dom";
import MenuBurger from "./menuburger/menuburger";
import "./Navbar.scss";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="navbar-container">
        <MenuBurger isActive={isActive} setIsActive={setIsActive} />
      </div>

      <button
        type="button"
        className={`menuburger-modal ${isActive ? "open" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="menuburger-contain-pages">
          <h3>Menu</h3>
          <ul className="menuburger-conatain-list">
            <li className="menuburger-conatain-list-details">
              <Link to="/">Accueil</Link>
            </li>
            <li className="menuburger-conatain-list-details">
              <Link to="/regles">Régles</Link>
            </li>
          </ul>
        </div>
      </button>
    </>
  );
}

export default Navbar;
