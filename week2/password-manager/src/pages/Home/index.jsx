import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { Link } from "react-router-dom";

import clasess from "./style.module.scss";
import { callAPIJSON } from "../../domain/api";
import { useEffect, useState } from "react";
import TableData from "../../components/TableData";
import { Button } from "@mui/material";
import Modal from "../../components/Modal";
import Logo from "../../components/Logo";

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
      <Logo/>
      <div className={clasess.navbar}>
        <Typography variant="h6" gutterBottom>
          <Link className={clasess.link} to={"/category/work"}> Work</Link>
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link className={clasess.link} to={"/category/family"}> Family</Link>
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link className={clasess.link} to={"/category/personal"}> Personal</Link>
        </Typography>
      </div>
      <div>
        <Modal />
      </div>
      <TableData datas={data} fetchData={fetchData} />
    </div>
  );
};

export default Home;
