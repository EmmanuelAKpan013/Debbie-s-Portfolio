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
      <div className="saudipix-miniIpad-section">
        <div>
          <img src={miniIpad} alt="" />
          <img src={iphonedesign} alt="" />
        </div>
      </div>
      <div className="saudipix-background-section">
        <div className="saudipix-background-large-text">
          <h2>Background</h2>
        </div>
        <div className="saudipix-background-paragraph">
          <div className="saudipix-para">
            <h4>01</h4>
            <p className="problemAndSolution">Problem</p>
            <p>
              Arabians are a minority group that often feels misrepresented in
              the media. This makes it difficult to find quality images that
              accurately represent them and their culture for use in their
              digital solutions. Saudipix's images solve this problem by
              creating a library of Arabian-made photos curated specifically for
              Arabs, making it easier for them to tell the stories they want to
              tell.
            </p>
            <br />
          </div>
          <div className="saudipix-para">
            <h4>02</h4>
            <p className="problemAndSolution">Solution</p>
            <p>
              Provide a product that provides these pictures that are culturally
              aligned and acceptable exclusively for Arabians and by Arabians.
              Encourage them to post arabian pictures by engaging in weekly
              competitions that have good prizes and awarding top contributors
              per month.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaudipixPage;
