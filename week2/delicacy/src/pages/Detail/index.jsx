import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { callAPI, addToFavorites, callAPIJSON } from "../../domain/api";

import Content from "../../components/Content";
import MiniBox from "../../components/MiniBox";
import classes from "./style.module.scss";
import Logo from "../../components/Logo";

const Detail = () => {
  const location = useLocation();
  const [datarandom, setDataRandom] = useState([]);
  const data = location.state;
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState([]);
  const [favoritesChanged, setFavoritesChanged] = useState(false);

  const fetchFavorites = async () => {
    try {
      const response = await callAPIJSON("/favorites", "GET");
      const modifiedData = response.map((item) => {
        return {
          id: item?.id,
        };
      });
      setFavorite(modifiedData);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };
  const handleAddToFavorites = async (data) => {
    try {
      const favoriteData = {
        id: data.idMeal,
        name: data.strMeal,
        gambar: data.strMealThumb,
      };
      await addToFavorites(favoriteData);
      alert("Added to Favorites!");
      setFavoritesChanged((prev) => !prev); 
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

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await callAPIJSON(`/favorites/${id}`, "delete");
      setFavorite(response);
      alert("Data berhasil didelete");
      setFavoritesChanged((prev) => !prev); 
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

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
          data={data}
          onClick={() => handleClickDetail(data)}
          addFav={() => handleAddToFavorites(data)}
          removeFav={() => handleDelete(data.idMeal)}
          favoritesChanged={favoritesChanged} 
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
              removeFav={() => handleDelete(data.idMeal)}
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
