import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Card from "../../components/Card";

import classes from "./style.module.scss";
import hills from "../../assets/images/pattern-hills.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";

const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (date) => {
    const time = Date.parse(date) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    const date = searchParams.get("date")
      ? searchParams.get("date")
      : "2024-01-24 17:00:00";
    setInterval(() => getTimeUntil(date), 1000);
    return () => clearInterval(date);
  }, []);

  return (
    <div className={classes.backgroundColor}>
      <div className={classes.stars}>
        <div className={classes.container}>
          <img src={hills} className={classes.hills} />
          <h1 className={classes.textTitle}>WE`RE LAUNCHING SOON</h1>
          <div className={classes.containerCardClock}>
            <div className={classes.containerCard}>
              <Card text={leading0(days)}></Card>
              <Card text={leading0(hours)}></Card>
              <Card text={leading0(minutes)}></Card>
              <Card text={leading0(seconds)}></Card>
            </div>
            <div className={classes.containerCard}>
              <div className={classes.cardDesc}>DAYS</div>
              <div className={classes.cardDesc}>HOURS</div>
              <div className={classes.cardDesc}>MINUTES</div>
              <div className={classes.cardDesc}>SECONDS</div>
            </div>
          </div>
          <div className={classes.socialMedia}>
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={pinterest} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
