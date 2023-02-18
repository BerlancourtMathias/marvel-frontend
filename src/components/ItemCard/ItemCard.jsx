//imports
import { ITEMCARD_CHARACTER_PICTURE_DIMENSION } from "../../constantVariables";

import "./ItemCard.css";

const ItemCard = ({ item }) => {
  //mettre une condition sur item.thumbnail.path, si item.thumbnail.path,
  //si =http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available alors mettre une image
  //marrante
  // if (
  //   item.thumbnail.path ===
  //   "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"

  //   image = "./img/imageNotFound.png";

  const image =
    item.thumbnail.path +
    "/" +
    ITEMCARD_CHARACTER_PICTURE_DIMENSION +
    "." +
    item.thumbnail.extension;

  //TODO mettre une condition si items comics existe alors mettre un lien vers /character/item._id
  return (
    <div className="itemCardContainer" key={item._id}>
      <div className="itemTitle">{item.title || item.name}</div>

      <img id="itemImage" src={image} alt="item illustration" />

      <div className="itemDescription">{item.description}</div>
    </div>
  );
};

export default ItemCard;
