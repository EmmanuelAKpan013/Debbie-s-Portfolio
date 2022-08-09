import Navbar from "../components/Navbar";
import "./BlomBlomPage.css";
import blomblomLogo from "../images/blomblom/Group 1421.png";
import blomblomFirstImage from "../images/blomblom/Rectangle 469 (2).png";
import dashboardImage from "../images/blomblom/Dashboard 1.png";

function BlomBlomPage() {
  return (
    <>
      <Navbar />
      <div className="blomLandingImageAndLogo">
        <div className="blomblomLandingImg">
          <img src={blomblomFirstImage} alt="" className="blomFirstImage" />
        </div>
        <div className="blomblom-logo">
          <img src={blomblomLogo} alt="" />
        </div>
      </div>
      <div className="roleContainer">
        <div className="roleContent">
          <h3>ROLE</h3>
          <br />
          <p>Research, UX Design</p>
          <p> UI Design.</p>
        </div>
        <div className="roleContent">
          <h3>TASK</h3>
          <br />
          <p>
            E- commerce Website Redesign, <br /> Digital solution for walk-in
            store and seamsless <br /> end to end appointment scheduling.
          </p>
        </div>
        <div className="roleContent year">
          <h3>YEAR</h3>
          <br />
          <p>2021 - Present</p>
        </div>
      </div>
      <div className="freeEyeTest">
        <img src={dashboardImage} alt="" />
      </div>

      <div className="blom-work-overview">
        <div className="work-overview-text">
          <h4>02</h4>
          <br />
          <h2>
            Work <br />
            OVerview
          </h2>
        </div>
        <div className="work-overview-text-para">
          <div className="blom-work-overview-para-1">
            <p>
              The brand was created because the owners wanted to see eyewear
              afresh – to do it better – and create a brand they would buy. They
              also value honesty, relish buying from similar souls, from people
              who want to stand for something. <br /> Therefore, working on this
              project, I had to ensure that the customers experienced eyewear
              afresh and understood that the brand valued honesty while
              preserving the brand identity.
            </p>
          </div>
          <br />
          <div className="">
            <h4>Solution</h4>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlomBlomPage;
