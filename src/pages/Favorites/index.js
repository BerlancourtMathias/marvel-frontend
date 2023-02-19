//imports
import "./favorites.css";
import Cookies from "js-cookie";

const Favorites = ({
  favoriteCharacters,
  setFavoriteCharacters,
  favoriteComics,
  setFavoriteComics,
}) => {
  Cookies.set("favoriteCharacters", favoriteCharacters);
  Cookies.set("favoriteComics", favoriteComics);
  console.log("liste de comics favoris : ", Cookies.get("favoriteComics"));
  console.log(
    "liste de characters favoris : ",
    Cookies.get("favoriteCharacters")
  );

  return (
    <div>
      FAVORITES youhou
      <div className="favoriteCharactersList"></div>
      <div className="favoriteComicsList"></div>
    </div>
  );
};

export default Favorites;
