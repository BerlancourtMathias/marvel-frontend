//imports
import { ITEMCARD_CHARACTER_PICTURE_DIMENSION } from "../../constantVariables";

import "./ItemCard.css";

const ItemCard = ({ item }) => {
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
      {/* <div className="itemPhoto"> */}
      <img id="itemImage" src={image} alt="item illustration" />
      {/* </div> */}

      <div className="itemDescription">{item.description}</div>
    </div>
  );
};

export default ItemCard;
