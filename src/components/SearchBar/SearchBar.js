//imports
import "./searchBar.css";

const SearchBar = ({ setInput }) => {
  const handleSearchQuery = (value) => {
    setInput(value);
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
