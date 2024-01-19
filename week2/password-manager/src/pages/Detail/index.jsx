import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { callAPIJSON } from "../../domain/api";
import { Typography } from "@mui/material";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

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

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Password Manager
      </Typography>
      <Typography variant="h5" gutterBottom>
        Provider: {data.provider}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Email: {data.email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Category: {data.category}
      </Typography>
    </div>
  );
};

export default Detail;
