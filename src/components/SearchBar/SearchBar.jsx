//imports
import "./searchBar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URI } from "../../constantVariables";

const SearchBar = ({ setData }) => {
  const [search, setSearch] = useState("");
  const [queryElement, setQueryElement] = useState("");

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
  }, [search]); //j'ai ajouté query et setData au tab de dépendnace suite à un warning de react

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
