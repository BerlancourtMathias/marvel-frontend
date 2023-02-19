//imports
import "./searchBar.css";
import axios from "axios";
import { API_URI } from "../../constantVariables";

const SearchBar = ({ setData, queryElement }) => {
  const query = API_URI + queryElement;

  const handleSearchQuery = async (value) => {
    try {
      const response = await axios.get(`${query}${value}`);

      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="searchBarContainer">
      <input
        name="searchText"
        type="textarea"
        placeholder="Search"
        onChange={(event) => {
          handleSearchQuery(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
