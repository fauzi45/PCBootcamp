import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { callAPI } from "../../domain/api";

import Content from "../../components/Content";
import MiniBox from "../../components/MiniBox";
import TopCategories from "../../components/TopCategories";
import classes from "./style.module.scss";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClickDetail = () => {
    navigate(`detail/`);
  };

  const handleClickFavo = () => {
    navigate("favorites");
  };
  const fetchDataCategory = async () => {
    const response = await callAPI("/categories.php", "GET");
    const modifiedData = response?.categories.map((item) => {
      return {
        name: item?.strCategory,
      };
    });
    modifiedData.splice(6);
    setCategory(modifiedData);
  };

  useEffect(() => {
    fetchDataCategory();
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseByCategories = await callAPI("/filter.php?c=Beef", "GET");
    const slicedResponse = responseByCategories?.meals?.slice(0, 10);

    const modifiedResponse = slicedResponse?.map(async (item) => {
      const responseByName = await callAPI(
        `/search.php?s=${item.strMeal}`,
        "GET"
      );
      const { idMeal, strIngredient1, strMeasure1, strMealThumb, strMeal } =
        responseByName.meals[0];
      return {
        idMeal,
        strIngredient1,
        strMeasure1,
        strMealThumb,
        strMeal,
      };
    });

    const finalResponse = await Promise.all(modifiedResponse);
    console.log(finalResponse);
    setData(finalResponse);
  };
  return (
    <div className={classes.container}>
      <div className={classes.topNavbar}>
        {category.length > 0 ? (
          category.map((data, index) => (
            <TopCategories key={index} text={data.name} />
          ))
        ) : (
          <p>Loading...</p>
        )}
        <p onClick={handleClickFavo}>Favorite</p>
      </div>
      <div className={classes.content}>
        <Content onClick={handleClickDetail} />
        <Content />
      </div>
      <p className={classes.textMore}>More recipies</p>
      <div className={classes.more}>
        <MiniBox />
        <MiniBox />
        <MiniBox />
        <MiniBox />
        <MiniBox />
        <MiniBox />
      </div>
    </div>
  );
};

export default Home;
