import { useNavigate, useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar";
import classes from "./style.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const DetailCountry = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state;
  const handleBack = () => {
    navigate(`/`);
  };

  return (
    <div className={classes.container}>
      <Navbar />
      <button className={classes.buttonBack} onClick={handleBack}>
        <KeyboardBackspaceIcon />
        Back
      </button>
      {console.log(data)}
      <div className={classes.content}>
        <div className={classes.contentKiri}>
          <img className={classes.image} src={data.flags.png} />
        </div>
        <div className={classes.contentKanan}>
          <h2 className={classes.title}>{data.name.common}</h2>
          <div className={classes.desc}>
            <div className={classes.descKiri}>
              {console.log(Object.values(data.name.nativeName))}
              <p>
                Native Name:{" "}
                <span>{Object.values(data.name.nativeName)[0].official}</span>
              </p>
              <p>
                Population: <span>{data.population}</span>
              </p>
              <p>
                Region: <span>{data.region}</span>
              </p>
              <p>
                Sub Region: <span>{data.subregion ? data.subregion : "-"}</span>
              </p>
              <p>
                Capital: <span>{data.capital}</span>
              </p>
            </div>
            <div className={classes.descKanan}>
              <p>
                Top Level Domain: <span>{data.tld}</span>
              </p>
              <p>
                Currencies:
                <span>{Object.values(data.currencies)[0].name}</span>
              </p>
              <p>
                Languanges:
                <span>{Object.values(data.languages).join(", ")}</span>
              </p>
            </div>
          </div>
          <div className={classes.borders}>
            <p>Border Countries:</p>
            {data.borders ? (
              Object.values(data.borders).map((data, index) => (
                <div key={index} className={classes.kotak}>
                  {data}
                </div>
              ))
            ) : (
              <div className={classes.kotak}>none</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCountry;
