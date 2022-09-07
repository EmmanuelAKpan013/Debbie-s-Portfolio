import rightArrowIcon from "../assets/icons/rightArrowIcon.svg";
import leftArrowIcon from "../assets/icons/leftArrowIcon.svg";
import rightArrowIconDark from "../assets/icons/rightArrowIconDark.png";
import leftArrowIconDark from "../assets/icons/leftArrowIconDark.png";

import "./Pagination.css";

function Pagination({ textColor }) {
  // textColor = "black";
  return (
    <div className="pagination-container">
      {textColor === "black" ? (
        <>
          <div className="darkText">
            <img src={leftArrowIconDark} alt="" />
            <p>Previous Project</p>
          </div>
          <div className="darkText">
            <p>Next Project</p>
            <img src={rightArrowIconDark} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="lightText">
            <img src={leftArrowIcon} alt="" />
            <p>Previous Project</p>
          </div>
          <div className="lightText">
            <p>Next Project</p>
            <img src={rightArrowIcon} alt="" />
          </div>
        </>
      )}

      {/* For dark text */}

      {/* <div className="lightText">
        <img src={leftArrowIcon} alt="" />
        <p>Previous Project </p>
      </div>

      <div className="lightText">
        <p>Next Project</p>
        <img src={rightArrowIcon} alt="" />
      </div> */}
    </div>
  );
}

export default Pagination;
