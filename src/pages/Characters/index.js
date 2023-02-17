// | HOME PAGE ---- "/"  |
//_|_____________________|

//imports
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../constantVariables";
import { Navigate } from "react-router-dom";
import "./characters.css";

//compenents imports
import ItemCard from "../../components/ItemCard/ItemCard";
import Spinner from "../../components/Spinner";
import SearchBar from "../../components/SearchBar/SearchBar";

const Characters = ({ queryElement, setQueryElement }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messageError, setMessageError] = useState();

  console.log("API_URI:", API_URI);
  setQueryElement("/characters?name=");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URI}/characters`);
        setData(response.data);
        setIsLoading(false);
        // console.log("response : ", response);
        console.log("response.data : ", response.data);
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
  } else
    return (
      <div className="characterCardContainer">
        <SearchBar
          setData={setData}
          setQueryElement={setQueryElement}
          queryElement={queryElement}
        />
        {data.results.map((item) => {
          return <ItemCard item={item} key={item._id} />;
        })}
      </div>
    );
};
export default Characters;