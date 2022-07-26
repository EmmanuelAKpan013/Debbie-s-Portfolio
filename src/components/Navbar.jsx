import "./Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="project-bar">Projects</div>
      <div className="resume-bar">Resume</div>
      <hr className="horizontal-line"></hr>
    </div>
  );
}

export default Navbar;
