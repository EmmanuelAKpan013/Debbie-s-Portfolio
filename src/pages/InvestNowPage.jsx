import Navbar from "../components/Navbar";
import "./InvestNowPage.css";
import investNowLandingImage from "../images/investnow/Component 12.png";
import investNowLogo from "../images/investnow/investNowLogo.png";
import investNowFirstIphoneDesign from "../images/investnow/Group 9376.png";
import investNowSecondIphoneDesign from "../images/investnow/Group 9375.png";
import investNowThirdIphoneDesign from "../images/investnow/Group 9381.png";
import investNowFourthIphoneDesign from "../images/investnow/Group 9380.png";
import investNowFifthIphoneDesign from "../images/investnow/Group 9377.png";
import investNowSixthIphoneDesign from "../images/investnow/Group 9374.png";

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
          <p>UI Design, UX Design</p>
        </div>
        <div className="investNow-roleContent">
          <h3>TASK</h3>
          <br />
          <p>
            Improve the userinterface and <br /> experience of the onboarding
            process
          </p>
        </div>
        <div className="investNow-roleContent year">
          <h3>YEAR</h3>
          <br />
          <p>3 days</p>
        </div>
      </div>
      <div className="investNow-layoutDesign">
        <div>
          <img src={investNowFirstIphoneDesign} alt="" />
        </div>
        <div>
          <img src={investNowSecondIphoneDesign} alt="" />
        </div>
        <div>
          <img src={investNowThirdIphoneDesign} alt="" />
        </div>
        <div>
          <img src={investNowFourthIphoneDesign} alt="" />
        </div>
        <div>{/* <img src={investNowFifthIphoneDesign} alt="" /> */}</div>
        <div>{/* <img src={investNowSixthIphoneDesign} alt="" /> */}</div>
        <div className="investNow-layoutDesign-lastContainer">
          <h3>InvestNow</h3>
          <br />
          <p>
            Investnow is an Integrated online web and mobile apps platform
            powered by United Capital Plc, that enables you to have complete
            management over your investment and financial portfolio to maximize
            profits and cut down losses.
          </p>
        </div>
      </div>

      <div className="invest-work-overview">
        <div className="invest-work-over-text">
          <h2>
            Work <br />
            OVerview
          </h2>
        </div>
        <div className="invest-work-over-text-para">
          <div className="invest-problem">
            <h4>Problem</h4>
            <p>
              A typical workflow in the healthcare industry is still paper based
              and it requires a lot of time and manual tracking for enrolling
              patients and medications.
            </p>
          </div>
          <br />
          <div className="invest-solution">
            <h4>Solution</h4>
            <p>
              The goal is for Nomad Bank to offer a digital solution that is SME
              focused Digital Banking and Unlocks Working Capital for these
              MSMEs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvestNowPage;
