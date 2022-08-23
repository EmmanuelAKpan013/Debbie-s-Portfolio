import Navbar from "../components/Navbar";
import "./InvestNowPage.css";
import investNowLandingImage from "../images/investnow/Component 12.png";
import investNowLogo from "../images/investnow/investNowLogo.png";

function InvestNowPage() {
  return (
    <>
      <Navbar />
      <div className="InvestNowLandingImageAndLogo">
        <div className="InvestNowLandingImg">
          <img
            src={investNowLandingImage}
            alt=""
            className="InvestNowFirstImage"
          />
        </div>
        <div className="investNow-logo">
          <img src={investNowLogo} alt="" />
        </div>
      </div>
      <div className="investNow-roleContainer">
        <div className="investNow-roleContent">
          <h3>ROLE</h3>
          <br />
          <p>Research, UX Design</p>
          <p> UI Design.</p>
        </div>
        <div className="investNow-roleContent">
          <h3>TASK</h3>
          <br />
          <p>
            E- commerce Website Redesign, <br /> Digital solution for walk-in
            store and seamsless <br /> end to end appointment scheduling.
          </p>
        </div>
        <div className="investNow-roleContent year">
          <h3>YEAR</h3>
          <br />
          <p>2021 - Present</p>
        </div>
      </div>
    </>
  );
}

export default InvestNowPage;
