import "./HomePage.css";
import designerImage from "../images/designerImage.png";
import productDesignerText from "../images/product designer.png";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="designer-container">
        <div className="designer-image">
          <img src={designerImage} alt="" />
        </div>
        <div className="designer-text">
          <img src={productDesignerText} alt="" />
        </div>
        <div className="designer-name">ONALO DEBORAH</div>
      </div>
    </>
  );
}

export default HomePage;
