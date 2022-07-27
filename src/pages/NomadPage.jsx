import "./NomadPage.css";
import Navbar from "../components/Navbar";
import nomadLogo from "../images/nomad/nomad.png";
import image1 from "../images/nomad/Rectangle 469.png";
import image2 from "../images/nomad/Rectangle 498.png";
import image3 from "../images/nomad/Rectangle 499.png";
import image4 from "../images/nomad/Rectangle 500.png";

function NomadPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* <div className="box-1">
          <img src={nomadLogo} alt="" />
        </div> */}
        <div className="box-1">
          <img src={image1} alt="" />
        </div>
        <div className="box-1">
          <img src={image2} alt="" />
        </div>
        <div className="box-1">
          <img src={image3} alt="" />
        </div>
        <div className="box-1">
          <img src={image4} alt="" />
        </div>
      </div>
    </>
  );
}

export default NomadPage;
