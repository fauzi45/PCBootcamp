import { useNavigate } from 'react-router-dom';

import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import clasess from "./style.module.scss";
import { callAPIJSON } from "../../domain/api";
import { useEffect, useState } from "react";
import TableData from "../../components/TableData";
import { Button } from '@mui/material';
import Modal from '../../components/Modal';

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await callAPIJSON("/password", "GET");
      setData(response);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={clasess.container}>
      <Typography variant="h3" gutterBottom>
        Password Manager
      </Typography>
      <div>
          <Modal />
      </div>
      <TableData datas={data} fetchData={fetchData} />

    </div >
  );
};

export default Home;
