import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { callAPI, callAPIJSON } from "../../domain/api";

import MiniBox from "../../components/MiniBox";
import TopCategories from "../../components/TopCategories";
import classes from "./style.module.scss";
import Logo from "../../components/Logo";

const Favorite = () => {
  const [category, setCategory] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeCategory, setActiveCategory] = useState("favorite");
  const navigate = useNavigate();

  const handleClickFavo = () => {
    navigate("");
  };

  const fetchFavorites = async () => {
    try {
      const response = await callAPIJSON('/favorites', 'GET');
      setFavorites(response);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
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
  };

  useEffect(() => {
    fetchData();
  },[activeCategory])

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleActive = (value) => {
    setActiveCategory(value);
    navigate("/");
  }

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <Logo onClick={handleClickHome}/>
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
        <p onClick={() => handleActive("favorite")} className={activeCategory === "favorite" ? classes.active : ''}>Favorite</p>
      </div>
      <div className={classes.content}>
        <div className={classes.contentGrid}>
          {favorites.length > 0 ? (
            favorites.map((data) => (
              <MiniBox
                key={data.idMeal}
                logo={data.gambar}
                title={data.name}
              // Tambahkan onClick jika ingin menavigasikan ke halaman detail favorit
              />
            ))
          ) : (
            <p>No favorites yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
