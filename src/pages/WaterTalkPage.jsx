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
    </>
  );
}

export default WaterTalkPage;
