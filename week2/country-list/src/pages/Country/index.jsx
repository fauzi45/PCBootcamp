import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { callAPI } from "../../domain/api";

import classes from "./style.module.scss";
import Navbar from "../../components/Navbar";
import CardItem from "../../components/CardItem";

function MyApp() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await callAPI("/all", "GET");
    const modifiedData = response?.map((item) => {
      return {
        name: item?.name,
        flags: item?.flags,
        population: item?.population,
        region: item?.region,
        capital: item?.capital,
        subregion: item?.subregion,
        tld: item?.tld,
        currencies: item?.currencies,
        languages: item?.languages,
        borders: item?.borders,
      };
    });
    modifiedData.splice(20);
    setData(modifiedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyFilter = () => {
    let filteredData = [...data];

    if (selectedFilter !== "") {
      filteredData = data.filter((item) => item.region === selectedFilter);
    }

    if (searchInput !== "") {
      filteredData = filteredData.filter((item) =>
        Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    }

    setFilteredResults(filteredData);
  };

  const handleClick = (value) => {
    navigate(`country-detail/`, { state: value });
  };

  useEffect(() => {
    applyFilter();
  }, [searchInput, selectedFilter, data]);

  return (
      <div className={classes.container}>
        <div className={classes.filter}>
          <input
            type="text"
            className={classes.filterInput}
            placeholder="Search for a country..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <select
            className={classes.filterSelect}
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="" hidden>
              Filter by Region
            </option>
            <option value="Africa">Afrika</option>
            <option value="Americas">Amerika</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className={classes.CardItem}>
          {filteredResults.length > 0 ? (
            filteredResults.map((data, index) => (
              <CardItem
                key={index}
                name={data.name.common}
                flags={data.flags.png}
                population={data.population}
                region={data.region}
                capital={data.capital}
                onClick={() => handleClick(data)}
              />
            ))
          ) : (
            <p className={classes.noData}>No data available.</p>
          )}
        </div>
      </div>
  );
}

export default MyApp;