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
import researchLadyOne from "../images/nomad/sigmund-YUuSAJkS3U4-unsplash.png";
import researchLadyTwo from "../images/nomad/green-chameleon-s9CC2SKySJM-unsplash.png";
import researchManOne from "../images/nomad/leon-m2TU2gfqSeE-unsplash 1.png";

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
      <div className="invest-research">
        <div className="invest-research-header-and-image">
          <div className="invest-research-header">
            <h4>03</h4>
            <br />
            <h2>Research</h2>
          </div>
          <div className="invest-research-image">
            <div className="image-box image-box-1">
              <img src={researchLadyOne} alt="" />
            </div>
            <div className=" image-box image-box-2">
              <img src={researchManOne} alt="" className="manImage" />
            </div>
            <div className="image-box image-box-3">
              <img src={researchLadyTwo} alt="" />
            </div>
          </div>
        </div>
        <div className="invest-research-para">
          <div className="invest-para-wrapper">
            <div className="invest-competitorAnalysis">
              <div className="invest-competitor-line-container">
                <hr className="invest-competitor-line" />
              </div>

              <div className="invest-analysis-container">
                <h4>Interviews</h4>
              </div>
            </div>
            <div>
              <p>
                Our team identified the challenges that users were facing by
                observing users use the product, conducting an in-depth analysis
                of online reviews, and diving into the platform ourselves
              </p>
            </div>
          </div>
          <br />
          <div className="invest-para-wrapper">
            <div className="invest-competitorAnalysis">
              <div className="invest-competitor-line-container">
                <hr className="invest-competitor-line" />
              </div>

              <div className="invest-analysis-container">
                <h4>Competitor Analysis</h4>
              </div>
            </div>
            <div>
              <p>
                Additionally, we conducted competitor analysis and discovered
                how cumbersome our product, especially in comparison with other
                similar products, was to use, thus the lack of interest on the
                part of users to continue using it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="invest-myroleandsolution">
        <div className="invest-myrole">
          <p>My Role & Approach to Solution</p>
        </div>
        <div className="invest-myrolepara">
          <p>
            I worked with another designer on this project, and we started our
            design process with research, then we deep dived into the platform
            to experience ourselves. We wanted to get a sense of what the users
            had been dealing with so far, positive and negative feedback alike.
            We also conducted competitor analysis and learnt and ddocumented
            about how these problems had been solved by other competitors. Now
            the major goal in this project was to improve the user interface as
            it was a bit quite old and to improve the user experience. because
            it was an existing product, we leveraged on the brand guidelines
            already provided.
          </p>
        </div>
      </div>
    </>
  );
}

export default InvestNowPage;
