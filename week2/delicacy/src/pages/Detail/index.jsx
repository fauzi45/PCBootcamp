import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { callAPI, addToFavorites } from "../../domain/api";

import Content from "../../components/Content";
import MiniBox from "../../components/MiniBox";
import classes from "./style.module.scss";
import Logo from "../../components/Logo";

const Detail = () => {
  const location = useLocation();
  const [datarandom, setDataRandom] = useState([]);
  const data = location.state;
  const navigate = useNavigate();

  const handleAddToFavorites = async (data) => {
    try {
      const favoriteData = {
        id: data.idMeal,
        name: data.strMeal,
        gambar: data.strMealThumb,
      };
      await addToFavorites(favoriteData);
      alert("Added to Favorites!");
    } catch (error) {
      console.error("Error adding to favorites:", error);
      alert("Failed to add to Favorites!");
    }
  };

  const handleClickDetail = (value) => {
    navigate(``, { state: value, hasDetailButton: true });
  };

  const handleClickHome = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchDataRandom();
  }, []);

  const fetchDataRandom = async () => {
    try {
      const apiPromises = Array.from({ length: 6 }, (_, index) =>
        callAPI("/random.php", "GET")
      );
      const responses = await Promise.all(apiPromises);
      const newData = responses.map((response) => response.meals[0]);
      setDataRandom(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className={classes.container}>
      <Logo onClick={handleClickHome} />
      <div className={classes.containerContent}>
        <Content
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
          addFav={() => handleAddToFavorites(data)}
        />
      </div>
      <p className={classes.textMore}>More recipies</p>
      <div className={classes.more}>
        {datarandom.length > 0 ? (
          datarandom.map((data) => (
            <MiniBox
              key={data.idMeal}
              logo={data.strMealThumb}
              title={data.strMeal}
              onClick={() => handleClickDetail(data)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
