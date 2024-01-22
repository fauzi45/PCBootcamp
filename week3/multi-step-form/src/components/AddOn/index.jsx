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

  const dispatch = useDispatch();

  const handleCheckboxChange = (addOnName) => {
    // Toggle the checkbox status for the selected add-on
    const updatedAddOns = personalInfo.addOns.includes(addOnName)
      ? personalInfo.addOns.filter((addOn) => addOn !== addOnName)
      : [...personalInfo.addOns, addOnName];

    // Update the state with the new add-ons array
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      addOns: updatedAddOns,
    }));
  };

  useEffect(() => {
    // Use useEffect to automatically dispatch the updated profile when add-ons change
    dispatch(setProfileDispatch(personalInfo));
  }, [personalInfo, dispatch]);


  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Pick add-ons</h2>
        <h5 className={classes.desc}>
          Add-ons help enchance your gaming experience.
        </h5>
        <div className={classes.content}>
          <div className={classes.Containerbox}>
            <div className={classes.check}>
              <input type="checkbox" checked={personalInfo.addOns.includes("onlineService")}
                onChange={() => handleCheckboxChange("onlineService")}
              />
              <div className={classes.checkContent}>
                <p className={classes.checkTitle}>Online Services</p>
                <p className={classes.checkDesc}>Access to multiplayer games</p>
              </div>
            </div>
            <p className={classes.boxCost}>{personalInfo.categoryRedux === "monthly" ? "$1/mo" : "$10/yr"}</p>
          </div>
          <div className={classes.Containerbox}>
            <div className={classes.check}>
              <input type="checkbox" checked={personalInfo.addOns.includes("Larger Storage")}
                onChange={() => handleCheckboxChange("Larger Storage")} />
              <div className={classes.checkContent}>
                <p className={classes.checkTitle}>Larger Storage</p>
                <p className={classes.checkDesc}>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className={classes.boxCost}>{personalInfo.categoryRedux === "monthly" ? "$2/mo" : "$20/yr"}</p>
          </div>
          <div className={classes.Containerbox}>
            <div className={classes.check}>
              <input type="checkbox" checked={personalInfo.addOns.includes("Customizable Profile")}
                onChange={() => handleCheckboxChange("Customizable Profile")} />
              <div className={classes.checkContent}>
                <p className={classes.checkTitle}>Customizable Profile</p>
                <p className={classes.checkDesc}>Custom theme on your profile</p>
              </div>
            </div>
            <p className={classes.boxCost}>{personalInfo.categoryRedux === "monthly" ? "$2/mo" : "$20/yr"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOn;
