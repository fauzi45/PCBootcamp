import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { callAPIJSON } from "../../domain/api";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [idData, setIdData] = useState(id);

  const fetchData = async () => {
    try {
      const response = await callAPIJSON(`/password/${id}`, "GET");
      console.log(response);
      
      setData(response);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>
    {data.provider}
  </div>;
};

export default Detail;
