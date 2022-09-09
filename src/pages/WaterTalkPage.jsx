import "./WaterTalkPage.css";
import Navbar from "../components/Navbar";
import waterLandingImage from "../images/watertalk/waterFirstImg.png";
import waterLogo from "../images/watertalk/Water.png";
import waterCreatePwdImg from "../images/watertalk/waterCreatePwd.png";
import waterLoginImg from "../images/watertalk/waterLogIn.png";
import waterSignUpImg from "../images/watertalk/waterSignUp.png";
import waterOnboardingImg from "../images/watertalk/waterOnboarding.png";
import waterChatImg from "../images/watertalk/waterChat.png";
import waterChatTwoImg from "../images/watertalk/waterChat(1).png";
import waterForgotPwdImg from "../images/watertalk/waterForgotPassword.png";
import waterRestaurantImg from "../images/watertalk/waterRestaurant.png";
import waterOnboardTalkImg from "../images/watertalk/iPhone 12 Graphite Pro Top View Mockup.png";
import waterOnboardTalkTwoImg from "../images/watertalk/iPhone 12 Graphite Pro Top View Mockup (1).png";

function WaterTalkPage() {
  return (
    <>
      <Navbar />
      <div className="waterLandingImageAndLogo">
        <div className="waterLandingImg">
          <img src={waterLandingImage} alt="" className="waterFirstImage" />
        </div>
        <div className="water-logo">
          <img src={waterLogo} alt="" />
        </div>
      </div>
      <div className="water-roleContainer">
        <div className="water-roleContent">
          <h3>ROLE</h3>
          <br />
          <p>UI Design</p>
        </div>
        <div className="water-roleContent">
          <h3>TASK</h3>
          <br />
          <p>
            Digital communication <br /> solution for vendors
          </p>
        </div>
        <div className="water-roleContent year">
          <h3>YEAR</h3>
          <br />
          <p>1 Week</p>
        </div>
      </div>
      <div className="water-background-section">
        <div className="water-bg-text">
          <p>Background</p>
        </div>

        <div className="water-bg-para">
          <div className="water-bg-line-and-aboutWaterTalk">
            <div className="water-bg-line-container">
              <hr className="water-insight-line" />
            </div>
            <div className="water-bg-aboutWaterTalk">
              <h4>About WaterTalk</h4>
            </div>
          </div>
          <div className="water-bg-paragraph">
            <p>
              Water is an application that aims to provide a quick and easy way
              to scoute for vendors, reach out to them, and communicate with
              them. The water application allows users to contact their favorite
              vendors from various locations, all from the comfort of their own
              home or office.
            </p>
          </div>
        </div>
      </div>
      <div className="water-wireframe">
        <p className="water-wireframe-header">Wireframe</p>
        <div className="water-wireframe-images">
          <div>
            <img src={waterSignUpImg} alt="" />
          </div>
          <div>
            <img src={waterOnboardingImg} alt="" />
          </div>
          <div>
            <img src={waterLoginImg} alt="" />
          </div>
          <div>
            <img src={waterCreatePwdImg} alt="" />
          </div>
          <div>
            <img src={waterForgotPwdImg} alt="" />
          </div>
          <div>
            <img src={waterChatImg} alt="" />
          </div>
          <div>
            <img src={waterChatTwoImg} alt="" />
          </div>
          <div>
            <img src={waterRestaurantImg} alt="" />
          </div>
        </div>
        <p className="water-wireframe-high-fidelity">High Fidelity</p>
        <p className="water-wireframe-high-fidelity-onboarding">
          Onboarding Screens
        </p>
        <div className="water-HF-onboarding-images">
          <div>
            <img src={waterOnboardTalkImg} alt="" />
          </div>
          <div>
            <img src={waterOnboardTalkTwoImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default WaterTalkPage;
