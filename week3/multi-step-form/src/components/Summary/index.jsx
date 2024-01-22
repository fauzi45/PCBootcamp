import { Link } from "react-router-dom";

import classes from "./style.module.scss";

const Summary = () => {
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Finishing up</h2>
        <h5 className={classes.desc}>
          Double-check everything looks OK before confirming.
        </h5>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <div className={classes.contentRow}>
              <div className={classes.topContentLeft}>
                <p className={classes.contentTitle}>Arcade (Monthly)</p>
                <Link className={classes.contentChange}>Change</Link>
              </div>
              <p className={classes.cost}>$9/mo</p>
            </div>
            <div className={classes.garis} />
            <div className={classes.contentRow}>
              <div className={classes.topContentLeft}>
                <p className={classes.contentChange}>Online Services</p>
              </div>
              <p className={classes.costBot}>+$1/mo</p>
            </div>
            <div className={classes.contentRow}>
              <div className={classes.topContentLeft}>
                <p className={classes.contentChange}>Larger Storage</p>
              </div>
              <p className={classes.costBot}>+$2/mo</p>
            </div>
          </div>
          <div className={classes.TotalCost}>
            <p className={classes.totalText}>Total (per month)</p>
            <p className={classes.totalCostNumber}>+$12/mo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
