//imports
import { ITEMCARD_CHARACTER_PICTURE_DIMENSION } from "../../constantVariables";
import imageNotFound from "./img/imageNotFound.png";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const image =
    item.thumbnail.path +
    "/" +
    ITEMCARD_CHARACTER_PICTURE_DIMENSION +
    "." +
    item.thumbnail.extension;

  const handleImage = () => {
    if (
      item.thumbnail.path ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
    ) {
      return imageNotFound;
    } else {
      return image;
    }
  };

  return (
    <div className="itemCardContainer" key={item._id}>
      <div className="itemTitle">{item.title || item.name}</div>

      <img id="itemImage" src={handleImage()} alt="item illustration" />

      <div className="itemDescription">{item.description}</div>
    </div>
  );
};

export default ItemCard;
