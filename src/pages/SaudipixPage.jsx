import "./SaudipixPage.css";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import saudipixLandingImage from "../images/saudipix/Hero Section.png";
import saudipixLogo from "../images/saudipix/Saudipix.png";
import miniIpad from "../images/saudipix/iPad Mini Body.png";
import iphonedesign from "../images/saudipix/saudipixIphone.png";
import projectTimeLine from "../images/saudipix/saudipixProjectTimeline.png";
import personaProfilePic from "../images/saudipix/saudipixEllipse.png";

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
            <p className="saudipix-problemAndSolution">Solution</p>
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
      <div className="saudipix-myroleandsolution">
        <div className="saudipix-myrole">
          <h4>03</h4>
          <p>My Role & Approach to Solution</p>
        </div>
        <div className="saudipix-myrolepara">
          <p>
            I worked with another designer on this project, and we started our
            design process with research, then we deep dived into the platform
            to experience ourselves. We wanted to get a sense of what the users
            had been dealing with so far, positive and negative feedback alike.
            We also conducted competitor analysis and learnt and ddocumented
            about how these problems had been solved by other competitors.
            <br /> <br />
            Now the major goal in this project was to improve the user interface
            as it was a bit quite old and to improve the user experience.
            because it was an existing product, we leveraged on the brand
            guidelines already provided.
          </p>
        </div>
      </div>
      <div className="saudipix-projectTimeline">
        <img src={projectTimeLine} alt="" />
      </div>

      <div className="saudipix-persona">
        <div className="saudipix-persona-image-description">
          <div className="saudipix-persona-image">
            <img src={personaProfilePic} alt="" />
          </div>
          <div className="saudipix-persona-description">
            <h2>Aairah Aakifah</h2>
            <br />
            <p className="saudipix-persona-first-paragraph">
              A single 27 year old male who currently lives in Saudi Arabia. He
              finished his master in design and arts and <br /> has just gotten
              a job as a g. She is currentraphics designer. He is single and
              like to go out with friends <br /> on long holidays.
            </p>
            <br />
          </div>
        </div>
        <div className="saudipix-card-container">
          <div className="saudipix-card">
            <h3>Core needs</h3>
            <ul>
              <li>
                <p>
                  Need to design fliers and posters that promote the company’s
                  services.
                </p>
              </li>
              <li>
                <p>
                  Needs to design these fliers that are relatable and aligns
                  with the country’s culture.
                </p>
              </li>
            </ul>
          </div>
          <div className="saudipix-card">
            <h3>Frustrations</h3>
            <ul>
              <li>
                <p>
                  People not responding to information due to lack of
                  relatability
                </p>
              </li>
              <li>
                <p>
                  Not much choice and comparison of images available that are
                  culturally inclined{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="saudipix-high-fidelity-wireframe">
        <h2>High Fidelity Wireframes</h2>
        <p>
          After gathering insights from our research sessions, we used the
          feebacks to make high fidelity designs. And since this was an existing
          product, the design leveraged on the existing design direction and
          style guide. Here are some selected screens
        </p>
      </div>
    </>
  );
}

export default SaudipixPage;
