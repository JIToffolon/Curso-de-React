import CartWidget from "../CartWidget";
import "./navbar.css";


function NavBar() { 
  
    return(
  
      <div className="nav">
      <ul className="lista">
        <li><button>Semillas</button></li>
        <li><button>Medallones</button></li>
        <li><button>Seitan</button></li>
        <li><button>Legumbres</button></li>
      </ul>
      <CartWidget/>
      </div>
  )
    ; }
  
  export default NavBar
      