import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { callAPI } from "../../domain/api";

import classes from "./style.module.scss";
import Navbar from "../../components/Navbar";
import CardItem from "../../components/CardItem";

function MyApp() {
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const fetchData = async () => {
    const response = await callAPI("/all", "GET");
    const modifiedData = response?.map((item) => {
      return {
        name: item.name,
        flags: item.flags,
        population: item.population,
        region: item.region,
        capital: item.capital,
        subregion: item.subregion,
        tld: item.tld,
        currencies: item.currencies,
        languages: item.languages,
        borders: item.borders,
      };
    });
    modifiedData.splice(20);

    setData(modifiedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (value) => {
    navigate(`country-detail/`, { state: value });
  };

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.filter}>
        <input
          type="text"
          className={classes.filterInput}
          placeholder="Search for a country..."
          onChange={(e) => searchItems(e.target.value)}
        />
        <select className={classes.filterSelect}>
          <option hidden>Filter by Region</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className={classes.CardItem}>
        {searchInput.length > 1
          ? filteredResults.map((data, index) => {
              return (
                <CardItem
                  key={index}
                  name={data.name.common}
                  flags={data.flags.png}
                  population={data.population}
                  region={data.region}
                  capital={data.capital}
                  onClick={() => handleClick(data)}
                />
              );
            })
          : data?.map((data, index) => (
              <CardItem
                key={index}
                name={data.name.common}
                flags={data.flags.png}
                population={data.population}
                region={data.region}
                capital={data.capital}
                onClick={() => handleClick(data)}
              />
            ))}
      </div>
    </div>
  );
}

export default MyApp;
