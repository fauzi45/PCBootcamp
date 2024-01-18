import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "../Button";
import Ingredients from "../Ingredients";
import classes from "./style.module.scss";
import { callAPIJSON } from "../../domain/api";
const Content = ({
  id,
  onClick,
  addFav,
  title,
  gambar,
  desc,
  ing1,
  desc1,
  ing2,
  desc2,
  ing3,
  desc3,
  ing4,
  desc4,
  removeFav,
}) => {
  const location = useLocation();
  const [favorite, setFavorite] = useState([]);

  const isInFavorites = favorite.some((fav) => fav.id === id);

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
  }, []);

  return (
    <div className={classes.BoxContainer}>
      <div className={classes.container}>
        <div className={classes.containerContent}>
          <p className={classes.title}>{title}</p>
          <img className={classes.gambarContent} src={gambar} />
          <div className={classes.desc}>{desc}</div>
          <p className={classes.ing}>Ingredients</p>
          <div className={classes.containerIng}>
            <Ingredients title={ing1} desc={desc1} />
            <Ingredients title={ing2} desc={desc2} />
            <Ingredients title={ing3} desc={desc3} />
            <Ingredients title={ing4} desc={desc4} />
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
