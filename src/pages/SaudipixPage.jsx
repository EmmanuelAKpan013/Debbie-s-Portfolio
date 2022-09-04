import "./SaudipixPage.css";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import saudipixLandingImage from "../images/saudipix/Hero Section.png";
import saudipixLogo from "../images/saudipix/Saudipix.png";
import miniIpad from "../images/saudipix/iPad Mini Body.png";
import iphonedesign from "../images/saudipix/saudipixIphone.png";

function SaudipixPage() {
  return (
    <>
      <Navbar />
      <div className="saudipixLandingImageAndLogo">
        <div className="saudipixLandingImg">
          <img
            src={saudipixLandingImage}
            alt=""
            className="saudipixFirstImage"
          />
        </div>
        <div className="saudipix-logo">
          <img src={saudipixLogo} alt="" />
        </div>
      </div>
      <div className="saudipix-roleContainer">
        <div className="saudipix-roleContent">
          <h3>ROLE</h3>
          <br />
          <p>UI Design, UX Design</p>
        </div>
        <div className="saudipix-roleContent">
          <h3>TASK</h3>
          <br />
          <p>
            Improve the userinterface and <br /> experience of the onboarding
            process
          </p>
        </div>
        <div className="saudipix-roleContent year">
          <h3>YEAR</h3>
          <br />
          <p>3 days</p>
        </div>
      </div>
    </>
  );
}

export default SaudipixPage;
