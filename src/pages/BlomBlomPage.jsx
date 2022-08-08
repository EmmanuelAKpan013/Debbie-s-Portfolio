import Navbar from "../components/Navbar";
import "./BlomBlomPage.css";
import blomblomLogo from "../images/blomblom/Group 1421.png";
import blomblomFirstImage from "../images/blomblom/Rectangle 469 (2).png";

function BlomBlomPage() {
  return (
    <>
      <Navbar />
      <div className="blomLandingImageAndLogo">
        {/* <div className="blomblom-logo">
          <img src={blomblomLogo} alt="" />
        </div> */}
        <div className="blomblomLandingImg">
          <img src={blomblomFirstImage} alt="" className="blomFirstImage" />
        </div>
      </div>
    </>
  );
}

export default BlomBlomPage;
