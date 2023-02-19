//imports
import axios from "axios";
import { API_URI } from "../../constantVariables";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./character.css";
import { CHARACTER_PICTURE_SQUARE_DIMENSION } from "../../constantVariables";
//like button
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
//end like button
//imports components
import ItemCard from "../../components/ItemCard/ItemCard";
import Spinner from "../../components/Spinner";

const Character = ({
  favoriteCharacters,
  setFavoriteCharacters,
  favoriteComics,
  setFavoriteComics,
}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messageError, setMessageError] = useState();

  let { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URI}/comics/${characterId}`);
        setIsLoading(false);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
        setMessageError("Error with loading");
      }
    };
    fetchData();
  }, [characterId]);

  if (isLoading) return <Spinner />;
  else if (messageError) {
    return <Navigate to="/error404" />;
  } else {
    const imageCharacterPageComPerChar =
      data.thumbnail.path +
      "/" +
      CHARACTER_PICTURE_SQUARE_DIMENSION +
      "." +
      data.thumbnail.extension;
    return (
      <div className="characterContainer">
        <div className="characterPresentation">
          <div id="characterNameIncComicsPerCharacter" className="itemTitle">
            {data.name}
          </div>

          <div className="characterPictureAndDescriptionFlex">
            <img
              id="characterPic"
              src={imageCharacterPageComPerChar}
              alt="character square"
            />
            <div
              className="hearthButtonCharPic"
              style={{
                margin: "auto",
                display: "block",
                width: "fit-content",
              }}
              onClick={() => {
                const newTab = [...favoriteCharacters];
                if (newTab.includes(data.name)) {
                  newTab.splice(newTab.indexOf(data.name), 2);
                } else {
                  newTab.push(data.name);
                }

                setFavoriteCharacters(newTab);
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name="checkedH"
                  />
                }
              />
            </div>

            <div
              id="charactrDescriptionInComicsPerCharacter"
              className="itemDescription"
            >
              {data.description}
            </div>
          </div>
        </div>
        <div id="appearsIn">appears in the following comics : </div>
        <div className="itemCardContainerCharacterPageFlex">
          {data.comics.map((item) => {
            return (
              <div
                className="hearthButtonComicsPic"
                style={{
                  margin: "auto",
                  display: "block",
                  width: "fit-content",
                }}
                onClick={() => {
                  const newTab = [...favoriteComics];
                  if (newTab.includes(item._id)) {
                    newTab.splice(newTab.indexOf(item._id), 1);
                  } else {
                    newTab.push(item.title);
                  }
                  setFavoriteComics(newTab);
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name="checkedH"
                    />
                  }
                />

                <ItemCard item={item} key={item._id} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Character;
