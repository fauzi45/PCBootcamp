import { Component } from "react";
import hills from "../assets/images/pattern-hills.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
export default class CoundownTimer extends Component {
  render() {
    return (
      <>
        <div className="background-image">
          <div className="stars">
            <div className="container">
              <img src={hills} className="hills" />
              <h1 className="title-text">WE`RE LAUNCHING SOON</h1>
              <div className="container-card-clock">
                <div className="container-card">
                  <div className="card">08</div>
                  <div className="card">23</div>
                  <div className="card">55</div>
                  <div className="card">41</div>
                </div>
                <div className="container-card">
                  <div className="card-desc">DAYS</div>
                  <div className="card-desc">HOURS</div>
                  <div className="card-desc">MINUTES</div>
                  <div className="card-desc">SECONDS</div>
                </div>
              </div>
              <div className="social-media">
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
      </>
    );
  }
}
