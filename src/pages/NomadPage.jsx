import "./NomadPage.css";
import Navbar from "../components/Navbar";
import nomadLogo from "../images/nomad/nomad.png";
import image1 from "../images/nomad/Rectangle 469.png";
import image2 from "../images/nomad/Rectangle 498.png";
import image3 from "../images/nomad/Rectangle 499.png";
import image4 from "../images/nomad/Rectangle 500.png";
import macbook from "../images/nomad/main.png";
import macbookContent from "../images/nomad/15_ Macbook Pro Mockup Front view label.png";

function NomadPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="nomad-logo">
          <img src={nomadLogo} alt="" />
        </div>

        <div className="imgContainer">
          <div className="nomadLandingImg img-1">
            <img src={image1} alt="" />
          </div>
          <div className="nomadLandingImg img-2">
            <img src={image2} alt="" />
          </div>
          <div className="nomadLandingImg img-3">
            <img src={image3} alt="" />
          </div>
          <div className="nomadLandingImg img-4">
            <img src={image4} alt="" />
          </div>
        </div>
      </div>

      <div className="roleContainer">
        <div className="roleContent">
          <h3>ROLE</h3>
          <br />
          <p>Product Strategy, Systems Design</p>
          <p>Product Design, Interaction Design</p>
        </div>
        <div className="roleContent">
          <h3>SCOPE</h3>
          <br />
          <p>
            Financial solution for <br /> MSMEs
          </p>
        </div>
        <div className="roleContent">
          <h3>YEAR</h3>
          <br />
          <p>2021 - Present</p>
        </div>
      </div>

      <div className="macbook-pro">
        <img src={macbook} alt="" className="macbook" />
        <img src={macbookContent} alt="" className="macbook-content" />
      </div>
    </>
  );
}

export default NomadPage;
