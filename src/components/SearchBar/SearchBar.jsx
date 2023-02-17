//imports
import "./searchBar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URI } from "../../constantVariables";

const SearchBar = ({ setData, queryElement, setQueryElement }) => {
  const [search, setSearch] = useState("");

  const query = API_URI + queryElement + search;
  console.log("query: ", query);

  useEffect(() => {
    setQueryElement("/characters?name=");
    const fetchData = async () => {
      try {
        const response = await axios.get(`${query}`);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search]);

  return (
    <div>
      SearchBar
      <input
        name="searchText"
        type="textarea"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
