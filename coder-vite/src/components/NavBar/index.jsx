import CartWidget from "../CartWidget";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <ul className="lista">
        <li>
          <NavLink to={"/"}>
            <button>Home</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/category/fit"}>
            <button>Fit</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/category/fat"}>
            <button>Fat</button>
          </NavLink>
        </li>
        <li>
          <button>Perfil</button>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar;
