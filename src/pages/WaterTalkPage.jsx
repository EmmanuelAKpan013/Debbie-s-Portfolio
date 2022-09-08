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
      <div className="water-background-section">
        <div className="water-bg-text">
          <p>Background</p>
        </div>

        <div className="water-bg-para">
          <div className="water-bg-line-and-aboutWaterTalk">
            <div className="water-bg-line-container">
              <hr className="water-insight-line" />
            </div>
            <div className="water-bg-aboutWaterTalk">
              <h4>About WaterTalk</h4>
            </div>
          </div>
          <div className="water-bg-paragraph">
            <p>
              Water is an application that aims to provide a quick and easy way
              to scoute for vendors, reach out to them, and communicate with
              them. The water application allows users to contact their favorite
              vendors from various locations, all from the comfort of their own
              home or office.
            </p>
          </div>
        </div>
      </div>
      <div className="water-wireframe">
        <p>Wireframe</p>
      </div>
    </>
  );
}

export default WaterTalkPage;
