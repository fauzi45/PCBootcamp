import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {setUsernameDispatcher} from "../../pages/Home/action";

import Button from "../Button";
import classes from "./style.module.scss";

const InfoPersonal = () => {
  const dispatch = useDispatch();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pNumber, setPNumber] = useState("");

  dispatch(setUsernameDispatcher({
    name,
    email
  }))

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Personal Info</h2>
        <h5 className={classes.desc}>
          Please Provide your name, email adress, and phone number.
        </h5>
        <div className={classes.content}>
          <div>
            <p className={classes.subtitle}>Name</p>
            <input
              required
              type="text"
              name="name"
              placeholder="e.g Stephen King"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <p className={classes.subtitle}>Email Address</p>
            <input
              required
              className="input"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g stephenking@lorem.com"
            ></input>
          </div>
          <div>
            <p className={classes.subtitle}>Phone Number</p>
            <input
              required
              type="text"
              name="firstname"
              onChange={(e) => setPNumber(e.target.value)}
              placeholder="e.g. +1 234 567 890"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPersonal;
