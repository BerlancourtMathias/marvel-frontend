//imports
import "./header.css";
import { Link } from "react-router-dom";
import logo from "./img/Marvel_Comics_logo.png";
import { useState } from "react";

const Header = () => {
  const [isCharPushed, setCharPushed] = useState(false);
  const [isComPushed, setComPushed] = useState(false);
  const [isFavPushed, setFavPushed] = useState(false);

  return (
    <div className="headerContainer">
      <img src={logo} alt="Marvel logo" />

      <nav>
        <Link to="/">
          <button
            onClick={() => {
              setCharPushed(!isCharPushed);
              if (isComPushed) {
                setComPushed(false);
              }
              if (isFavPushed) {
                setFavPushed(false);
              }
            }}
            className={
              isCharPushed ? "buttonPushed-char" : "buttonNotPushed-char"
            }
          >
            Characters
          </button>
        </Link>
        <Link to="/comics">
          <button
            onClick={() => {
              setComPushed(!isComPushed);

              if (isCharPushed) {
                setCharPushed(false);
              }
              if (isFavPushed) {
                setFavPushed(false);
              }
            }}
            className={isComPushed ? "buttonPushed-com" : "buttonNotPushed-com"}
          >
            Comics
          </button>
        </Link>
        <Link to="/favorites">
          <button
            onClick={() => {
              setFavPushed(!isFavPushed);
              // setSkip(null);
              if (isCharPushed) {
                setCharPushed(false);
              }
              if (isComPushed) {
                setComPushed(false);
              }
            }}
            className={isFavPushed ? "buttonPushed-fav" : "buttonNotPushed-fav"}
          >
            Favorites
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
