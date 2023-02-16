//imports
import "./header.css";
import { Link } from "react-router-dom";
import logo from "./img/Marvel_Comics_logo.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={logo} alt="Marvel logo" />

      <nav>
        <Link to="/">
          <button>Characters</button>
        </Link>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
