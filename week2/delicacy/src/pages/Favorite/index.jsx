import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { callAPI } from "../../domain/api";

import MiniBox from "../../components/MiniBox";
import TopCategories from "../../components/TopCategories";
import classes from "./style.module.scss";

const Favorite = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  const handleClickFavo = () => {
    navigate("favorites");
  };

  const fetchData = async () => {
    const response = await callAPI("/categories.php", "GET");
    const modifiedData = response?.categories.map((item) => {
      return {
        name: item?.strCategory,
      };
    });
    modifiedData.splice(6);
    setCategory(modifiedData);
    console.log(modifiedData);
  };

  
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className={classes.container}>
      <div className={classes.topNavbar}>
        {category.length > 0 ? (
          category.map((data) => (
            <TopCategories key={data.id} text={data.name} />
          ))
        ) : (
          <p>No data available.</p>
        )}
        <p onClick={handleClickFavo}>Favorite</p>
      </div>
      <div className={classes.content}>
        <div className={classes.contentGrid}>
          <MiniBox />
          <MiniBox />
          <MiniBox />
          <MiniBox />
          <MiniBox />
          <MiniBox />
          <MiniBox />
          <MiniBox />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
