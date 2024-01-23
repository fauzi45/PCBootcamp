import { useDispatch, useSelector } from "react-redux";
import { setProfileDispatch, setStep } from "../../pages/Home/action";
import { useState, useEffect } from "react";

import classes from "./style.module.scss";

const AddOn = () => {
  const personalInfoRedux = useSelector((state) => state.homeReducer.profile);
  const [personalInfo, setPersonalInfo] = useState({
    name: personalInfoRedux.name,
    email: personalInfoRedux.email,
    phoneNumber: personalInfoRedux.phoneNumber,
    plan: personalInfoRedux.plan,
    planValue: personalInfoRedux.planValue,
    categoryRedux: personalInfoRedux.categoryRedux,
    addOns: personalInfoRedux.addOns || [],
  });

  const [isActiveOSE, setIsActiveOSE] = useState();

  const dispatch = useDispatch();

  const handleCheckboxChange = (addOnName, cost) => {
    const updatedAddOns = personalInfo.addOns.filter(
      (addOn) => addOn.name !== addOnName
    );

    if (!personalInfo.addOns.some((addOn) => addOn.name === addOnName)) {
      updatedAddOns.push({ name: addOnName, cost });
    }

    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      addOns: updatedAddOns,
      isActiveOS: isActiveOSE,
    }));
  };

  const handleContainerClick = (addOnName, cost) => {
    handleCheckboxChange(addOnName, cost);
  };

  useEffect(() => {
    if (personalInfoRedux.isActiveOS === true) {
      setIsActiveOSE(personalInfoRedux.isActiveOS);
    } else {
      setIsActiveOSE(false);
    }
  }, []);

  useEffect(() => {
    dispatch(setProfileDispatch(personalInfo));
  }, [personalInfo, dispatch]);

  const checkAddOn = (value) => {
    let isSelected = personalInfo.addOns.find((c) => c.name === value);
    return isSelected ? classes.active : classes.Containerbox;
  };

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Pick add-ons</h2>
        <h5 className={classes.desc}>
          Add-ons help enchance your gaming experience.
        </h5>
        <div className={classes.content}>
          <div
            className={checkAddOn("Online Service")}
            onClick={() => {
              handleContainerClick(
                "Online Service",
                personalInfo.categoryRedux === "monthly" ? "1" : "10"
              );
            }}
          >
            <div className={classes.check}>
              <input
                type="checkbox"
                checked={personalInfo.addOns.some(
                  (addOn) => addOn.name === "Online Service"
                )}
                onChange={() => {
                  handleCheckboxChange(
                    "Online Service",
                    personalInfo.categoryRedux === "monthly" ? "1" : "10"
                  );
                }}
              />
              <div className={classes.checkContent}>
                <p className={classes.checkTitle}>Online Services</p>
                <p className={classes.checkDesc}>Access to multiplayer games</p>
              </div>
            </div>
            <p className={classes.boxCost}>
              {personalInfo.categoryRedux === "monthly" ? "$1/mo" : "$10/yr"}
            </p>
          </div>
          <div
            className={checkAddOn("Larger Storage")}
            onClick={() => {
              handleContainerClick(
                "Larger Storage",
                personalInfo.categoryRedux === "monthly" ? "2" : "20"
              );
              !isActiveOSE ? setIsActiveOSE(true) : setIsActiveOSE(false);
            }}
          >
            <div className={classes.check}>
              <input
                type="checkbox"
                checked={personalInfo.addOns.some(
                  (addOn) => addOn.name === "Larger Storage"
                )}
                onChange={() => {
                  handleCheckboxChange(
                    "Larger Storage",
                    personalInfo.categoryRedux === "monthly" ? "2" : "20"
                  );
                  !isActiveOSE ? setIsActiveOSE(true) : setIsActiveOSE(false);
                }}
              />
              <div className={classes.checkContent}>
                <p className={classes.checkTitle}>Larger Storage</p>
                <p className={classes.checkDesc}>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className={classes.boxCost}>
              {personalInfo.categoryRedux === "monthly" ? "$2/mo" : "$20/yr"}
            </p>
          </div>
          <div
            className={checkAddOn("Customizable Profile")}
            onClick={() =>
              handleContainerClick(
                "Customizable Profile",
                personalInfo.categoryRedux === "monthly" ? "2" : "20"
              )
            }
          >
            <div className={classes.check}>
              <input
                type="checkbox"
                checked={personalInfo.addOns.some(
                  (addOn) => addOn.name === "Customizable Profile"
                )}
                onChange={() =>
                  handleCheckboxChange(
                    "Customizable Profile",
                    personalInfo.categoryRedux === "monthly" ? "2" : "20"
                  )
                }
              />
              <div className={classes.checkContent}>
                <p className={classes.checkTitle}>Customizable Profile</p>
                <p className={classes.checkDesc}>
                  Custom theme on your profile
                </p>
              </div>
            </div>
            <p className={classes.boxCost}>
              {personalInfo.categoryRedux === "monthly" ? "$2/mo" : "$20/yr"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOn;
