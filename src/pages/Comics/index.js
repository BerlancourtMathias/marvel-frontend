//imports
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../constantVariables";
import "./comics.css";

//compenents imports
import ItemCard from "../../components/ItemCard/ItemCard";
import Spinner from "../../components/Spinner";
import SearchBar from "../../components/SearchBar/SearchBar";
import PaginationButtons from "../../components/PaginationButtons";

const Comics = ({ skip, setSkip }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messageError, setMessageError] = useState();
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URI}/comics?title=${input}&skip=${skip}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setMessageError("Error with loading");
      }
    };
    fetchData();
  }, [skip, input]);

  if (isLoading) return <Spinner />;
  else if (messageError) return <div>{messageError}</div>;
  else
    return (
      <div className="comicsContainer">
        <SearchBar setInput={setInput} />
        <PaginationButtons setSkip={setSkip} skip={skip} data={data} />
        <div className="comicsCardContainer">
          {data.results.map((item) => {
            return <ItemCard item={item} key={item._id} />;
          })}
        </div>
        <PaginationButtons setSkip={setSkip} skip={skip} data={data} />
      </div>
    );
};

export default Comics;
