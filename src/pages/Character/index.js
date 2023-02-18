//imports
import axios from "axios";
import { API_URI } from "../../constantVariables";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./character.css";
import { CHARACTER_PICTURE_SQUARE_DIMENSION } from "../../constantVariables";

//imports components
import ItemCard from "../../components/ItemCard/ItemCard";
import Spinner from "../../components/Spinner";
//NOTE: en fait il ya  deux requetes axios a fiare sur cette page
//charachter/characterId  et comics/characterId (a ajouter au back aussis)
const Character = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messageError, setMessageError] = useState();
  const location = useLocation();
  const { id } = location.state;
  // const params = useParams();

  let { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URI}/comics/${characterId}`);

        setIsLoading(false);
        setData(response.data);

        console.log("response.data char au singulier: ", response.data);
        // console.log("DATA RESULTS:", data.results);
      } catch (error) {
        console.log(error.message);
        setMessageError("Error with loading");
      }
    };
    fetchData();
  }, []);

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
            return <ItemCard item={item} key={item._id} />;
          })}
        </div>
      </div>
    );
  }
};
export default Character;
