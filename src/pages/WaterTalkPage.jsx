import "./WaterTalkPage.css";
import Navbar from "../components/Navbar";
import waterLandingImage from "../images/watertalk/waterFirstImg.png";
import waterLogo from "../images/watertalk/Water.png";

function WaterTalkPage() {
  return (
    <>
      <Navbar />
      <div className="waterLandingImageAndLogo">
        <div className="waterLandingImg">
          <img src={waterLandingImage} alt="" className="waterFirstImage" />
        </div>
        <div className="water-logo">
          <img src={waterLogo} alt="" />
        </div>
      </div>
      <div className="water-roleContainer">
        <div className="water-roleContent">
          <h3>ROLE</h3>
          <br />
          <p>UI Design</p>
        </div>
        <div className="water-roleContent">
          <h3>TASK</h3>
          <br />
          <p>
            Digital communication <br /> solution for vendors
          </p>
        </div>
        <div className="water-roleContent year">
          <h3>YEAR</h3>
          <br />
          <p>1 Week</p>
        </div>
      </div>
    </>
  );
}

export default WaterTalkPage;
