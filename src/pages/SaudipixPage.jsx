import "./SaudipixPage.css";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import saudipixLandingImage from "../images/saudipix/Hero Section.png";
import saudipixLogo from "../images/saudipix/Saudipix.png";

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
    </>
  );
}

export default SaudipixPage;
