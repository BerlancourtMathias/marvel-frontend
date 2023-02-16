//imports
import { ITEMCARD_CHARACTER_PICTURE_DIMENSION } from "../../constantVariables";

const ItemCard = ({ item }) => {
  const image =
    item.thumbnail.path +
    "/" +
    ITEMCARD_CHARACTER_PICTURE_DIMENSION +
    "." +
    item.thumbnail.extension;
  console.log(image);
  return (
    <div className="itemCardContainer" key={item._id}>
      <div className="itemTitle">{item.title || item.name}</div>
      {/* <div className="itemPhoto"> */}
      <img src={image} alt="item illustration" />
      {/* </div> */}

      <div className="itemDescription">{item.description}</div>
    </div>
  );
};

export default ItemCard;
