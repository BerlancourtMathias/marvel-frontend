//imports
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../constantVariables";
import "./comics.css";

//compenents imports
import ItemCard from "../../components/ItemCard/ItemCard";
import Spinner from "../../components/Spinner";
import SearchBar from "../../components/SearchBar/SearchBar";

const Comics = ({ queryElement, setQueryElement }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messageError, setMessageError] = useState();

  console.log("API_URI:", API_URI);
  setQueryElement("/comics?title=");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URI}/comics`);
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
  else if (messageError) return <div>{messageError}</div>;
  else
    return (
      <div className="comicsCardContainer">
        <SearchBar
          setData={setData}
          queryElement={queryElement}
          setQueryElement={setQueryElement}
        />
        {data.results.map((item) => {
          return <ItemCard item={item} key={item._id} />;
        })}
      </div>
    );
};

export default Comics;