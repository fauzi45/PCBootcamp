import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { callAPI, addToFavorites, callAPIJSON } from "../../domain/api";

import Content from "../../components/Content";
import MiniBox from "../../components/MiniBox";
import TopCategories from "../../components/TopCategories";
import classes from "./style.module.scss";
import Logo from "../../components/Logo";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [datarandom, setDataRandom] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Beef");
  const navigate = useNavigate();

  const handleAddToFavorites = async (data) => {
    try {
      const favoriteData = {
        idMeal: data.idMeal,
        name: data.strMeal,
        gambar: data.strMealThumb,
      };
      await addToFavorites(favoriteData);
      alert('Added to Favorites!');
    } catch (error) {
      console.error('Error adding to favorites:', error);
      alert('Failed to add to Favorites!');
    }
  };


  const handleClickDetail = (value) => {
    navigate(`detail/`, { state: value, hasDetailButton: true },
    );
  };

  const handleClickFavo = (value) => {
    setActiveCategory(value);
    navigate("favorites");
  };

  const handleClickHome = () => {
    navigate("/");
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
  }, [activeCategory]);

  useEffect(() => {
    fetchDataRandom();
  }, []);

  const fetchDataRandom = async () => {
    try {
      const apiPromises = Array.from({ length: 6 }, (_, index) =>
        callAPI("/random.php", "GET")
      );
      const responses = await Promise.all(apiPromises);
      const newData = responses.map(response => response.meals[0]);
      setDataRandom(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchData = async () => {
    const responseByCategories = await callAPI(`/filter.php?c=${activeCategory}`, "GET");
    const slicedResponse = responseByCategories?.meals?.slice(0, 5);

    const modifiedResponse = slicedResponse?.map(async (item) => {
      const responseByName = await callAPI(
        `/search.php?s=${item.strMeal}`,
        "GET"
      );
      const { idMeal, strIngredient1, strInstructions, strMeasure1, strIngredient2,
        strMeasure2,
        strIngredient3,
        strMeasure3,
        strIngredient4,
        strMeasure4, strMealThumb, strMeal } =
        responseByName.meals[0];
      return {
        idMeal,
        strInstructions,
        strMealThumb,
        strMeal,
        strIngredient1,
        strMeasure1,
        strIngredient2,
        strMeasure2,
        strIngredient3,
        strMeasure3,
        strIngredient4,
        strMeasure4,
      };
    });
    const finalResponse = await Promise.all(modifiedResponse);
    setData(finalResponse);
  };

  const handleActive = (value) => {
    setActiveCategory(value);
  }

  return (
    <div className={classes.container}>
      <Logo onClick={handleClickHome} />
      <div className={classes.topNavbar}>
        {category.length > 0 ? (
          category.map((data, index) => (
            <div key={index} onClick={() => handleActive(data.name)} className={activeCategory === data.name ? classes.active : ''}>
              <TopCategories text={data.name} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <p onClick={() => handleClickFavo("favorite")} className={activeCategory === "favorite" ? classes.active : ''}>Favorite</p>
      </div>
      <div className={classes.content}>
        {data.length > 0 ? (
          data.map((data, index) => (
            <Content
              key={index}
              title={data.strMeal}
              desc={data.strInstructions}
              gambar={data.strMealThumb}
              ing1={data.strIngredient1}
              desc1={data.strMeasure1}
              ing2={data.strIngredient2}
              desc2={data.strMeasure2}
              ing3={data.strIngredient3}
              desc3={data.strMeasure3}
              ing4={data.strIngredient4}
              desc4={data.strMeasure4}
              onClick={() => handleClickDetail(data)}
              addFav={() => handleAddToFavorites(data)} />
          ))
        ) : (
          <div className={classes.containerLoading}>Loading...</div>
        )}

      </div>
      <p className={classes.textMore}>More recipies</p>
      <div className={classes.more}>
        {datarandom.length > 0 ? (
          datarandom.map(data => (
            <MiniBox key={data.idMeal} logo={data.strMealThumb} title={data.strMeal} onClick={() => handleClickDetail(data)} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
