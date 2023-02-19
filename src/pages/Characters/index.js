// | HOME PAGE ---- "/"  |
//_|_____________________|

//imports
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../constantVariables";
import { Navigate, useNavigate } from "react-router-dom";
import "./characters.css";

//compenents imports
import ItemCard from "../../components/ItemCard/ItemCard";
import Spinner from "../../components/Spinner";
import SearchBar from "../../components/SearchBar/SearchBar";
import PaginationButtons from "../../components/PaginationButtons";

const Characters = ({ queryElement, setQueryElement, skip, setSkip }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messageError, setMessageError] = useState();
  // const [skip, setSkip] = useState(null);

  const navigate = useNavigate();

  console.log("API_URI:", API_URI);

  useEffect(() => {
    setQueryElement(`/characters?&name=`);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URI}/characters?skip=${skip}`);
        setData(response.data);
        setIsLoading(false);

        console.log("response.data : ", response.data);
      } catch (error) {
        console.log(error.message);
        setMessageError("Error with loading");
      }
    };
    fetchData();
  }, [skip]);

  if (isLoading) return <Spinner />;
  else if (messageError) {
    return <Navigate to="/error404" />;
  } else
    return (
      <div className="charactersContainer">
        <SearchBar setData={setData} queryElement={queryElement} />
        <PaginationButtons setSkip={setSkip} skip={skip} data={data} />
        <div className="characterCardContainer">
          {data.results.map((item) => {
            return (
              <button
                key={item._id}
                className="characterCardButton"
                onClick={() =>
                  navigate(`/character/${item._id}`, {
                    state: { id: item._id },
                  })
                }
              >
                <ItemCard item={item} key={item._id} />
              </button>
            );
          })}
        </div>

        <PaginationButtons setSkip={setSkip} skip={skip} data={data} />
        {/* {skip >= 100 && (
            <>
              <button
                onClick={() => {
                  setSkip(0);
                }}
              >
                first page
              </button>

              <button
                onClick={() => {
                  setSkip(skip - 100);
                }}
              >
                previous page
              </button>
            </>
          )}
          <div className="currentPageDIsplay">{(skip + 100) / 100}</div>
          {skip < (Math.ceil(data.count - 100) / 100) * 100 && (
            <>
              <button
                onClick={() => {
                  setSkip(skip + 100);
                }}
              >
                next page
              </button>

              <button
                onClick={() => {
                  setSkip(Math.ceil((data.count - 100) / 100) * 100);
                }}
              >
                {Math.ceil(data.count / 100)}
              </button>
            </>
          )}*/}
      </div>
    );
};
export default Characters;
