//imports
import "./favorites.css";

const Favorites = ({
  favoriteCharacters,
  setFavoriteCharacters,
  favoriteComics,
  setFavoriteComics,
}) => {
  return (
    <div>
      FAVORITES youhou
      <div className="favoriteCharactersList"></div>
      <div className="favoriteComicsList"></div>
    </div>
  );
};

export default Favorites;
