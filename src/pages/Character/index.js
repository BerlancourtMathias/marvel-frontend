//imports
import axios from "axios";
import { API_URI } from "../../constantVariables";
import { useState, useEffect } from "react";

const Character = ({ data, setData }) => {
  //   const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [messageError, setMessageError] = useState();

  console.log("API_URI:", API_URI);
  console.log("responsedata sur character au singulier : ", data.results);
  console.log("requete sur :", `${API_URI}/character/id`);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URI}/character/id`);
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

  return <div className="characterConatainer">PAGE de UN CHARACTER</div>;
};
export default Character;
