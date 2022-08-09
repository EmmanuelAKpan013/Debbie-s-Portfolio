import Navbar from "../components/Navbar";
import "./BlomBlomPage.css";
import blomblomLogo from "../images/blomblom/Group 1421.png";
import blomblomFirstImage from "../images/blomblom/Rectangle 469 (2).png";

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
      <div className="freeEyeTest"></div>
    </>
  );
}

export default BlomBlomPage;
