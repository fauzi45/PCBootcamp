import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "../Button";
import Ingredients from "../Ingredients";
import classes from "./style.module.scss";
import { callAPIJSON } from "../../domain/api";
const Content = ({ addFav, onClick, removeFav, data }) => {
  const location = useLocation();
  const [favorite, setFavorite] = useState([]);
  
  const isInFavorites = favorite.some((fav) => fav.id === data?.idMeal);

  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
  } = data;
  
  const handleRemoveFromFavorites = () => {
    if (isInFavorites) {
      removeFav(); // Call the removeFav function passed as a prop
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await callAPIJSON("/favorites", "GET");

      const modifiedData = response?.map((item) => {
        return {
          id: item?.id,
        };
      });
      setFavorite(modifiedData);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [favorite]);

  return (
    <div className={classes.BoxContainer}>
      <div className={classes.container}>
        <div className={classes.containerContent}>
          <p className={classes.title}>{strMeal}</p>
          <img className={classes.gambarContent} src={strMealThumb} />
          <div className={classes.desc}>{strInstructions}</div>
          <p className={classes.ing}>Ingredients</p>
          <div className={classes.containerIng}>
            <Ingredients title={strIngredient1} desc={strMeasure1} />
            <Ingredients title={strIngredient2} desc={strMeasure2} />
            <Ingredients title={strIngredient3} desc={strMeasure3} />
            <Ingredients title={strIngredient4} desc={strMeasure4} />
          </div>
          <div className={classes.boxButton}>
            {location.pathname === "/detail/" ? (
              ""
            ) : (
              <Button onClick={onClick} text={"Detail"} />
            )}

            {isInFavorites ? (
              <Button
                onClick={handleRemoveFromFavorites}
                text={"Remove from Favorites"}
              ></Button>
            ) : (
              <Button onClick={addFav} text={"Add to Favorites"}></Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
