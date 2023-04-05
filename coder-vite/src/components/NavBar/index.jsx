import CartWidget from "../CartWidget";
import "./navbar.css";
import { NavLink } from "react-router-dom";



function NavBar() {
  return (
    <div className="nav">
      <NavLink to={"/"}>
        <img className="icon" src="../Public/Icons/bee.png" alt="icono" />
      </NavLink>
      <NavLink to={"/"}>
        <img className="icon2" src="../Public/Icons/iconweb.png" alt="icono" />
      </NavLink>

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
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar;
