import classes from "./style.module.scss";

const AddOn = () => {
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
              <input type="checkbox" />
              <div className={classes.checkContent}>
                <p className={classes.checkTitle}>Online Services</p>
                <p className={classes.checkDesc}>Access to multiplayer games</p>
              </div>
            </div>
            <p className={classes.boxCost}>+$1/mo</p>
          </div>
          <div className={classes.Containerbox}>
            <div className={classes.check}>
              <input type="checkbox" />
              <div className={classes.checkContent}>
                <p className={classes.checkTitle}>Larger Storage</p>
                <p className={classes.checkDesc}>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className={classes.boxCost}>+$2/mo</p>
          </div>
          <div className={classes.Containerbox}>
            <div className={classes.check}>
              <input type="checkbox" />
              <div className={classes.checkContent}>
                <p className={classes.checkTitle}>Customizable Profile</p>
                <p className={classes.checkDesc}>Custom theme on your profile</p>
              </div>
            </div>
            <p className={classes.boxCost}>+$2/mo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOn;
