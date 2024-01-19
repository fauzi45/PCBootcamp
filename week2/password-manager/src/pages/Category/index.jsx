import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { callAPIJSON } from "../../domain/api";
import TableData from "../../components/TableData";
import { Typography } from "@mui/material";
import Logo from "../../components/Logo";
import clasess from "./style.module.scss";

const Category = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await callAPIJSON(
        `/password?category=${category}`,
        "GET"
      );
      console.log(response);
      setData(response);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div>
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
      <TableData datas={data} />
    </div>
  );
};

export default Category;
