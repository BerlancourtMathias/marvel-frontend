import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
//----Pages----
import Characters from "./pages/Characters/index";
import Comics from "./pages/Comics/index";
import Character from "./pages/Character/index";
import Favorites from "./pages/Favorites";
//----components----
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  const [queryElement, setQueryElement] = useState("");
  const [skip, setSkip] = useState(0);
  const [favoriteCharacters, setFavoriteCharacters] = useState(
    Cookies.get("favoriteCharacters").split(",") || []
  );
  const [favoriteComics, setFavoriteComics] = useState(
    Cookies.get("favoriteComics").split(",") || []
  );

  return (
    <div className="App">
      <Router>
        <Header setSkip={setSkip} skip={skip} />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Characters
                  queryElement={queryElement}
                  setQueryElement={setQueryElement}
                  skip={skip}
                  setSkip={setSkip}
                />
              }
            />
            <Route
              path="/comics"
              element={
                <Comics
                  queryElement={queryElement}
                  setQueryElement={setQueryElement}
                  skip={skip}
                  setSkip={setSkip}
                />
              }
            />
            <Route
              path="/character/:characterId"
              element={
                <Character
                  favoriteCharacters={favoriteCharacters}
                  setFavoriteCharacters={setFavoriteCharacters}
                  favoriteComics={favoriteComics}
                  setFavoriteComics={setFavoriteComics}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favoriteCharacters={favoriteCharacters}
                  setFavoriteCharacters={setFavoriteCharacters}
                  favoriteComics={favoriteComics}
                  setFavoriteComics={setFavoriteComics}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
