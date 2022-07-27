import { useNavigate, useParams } from "react-router-dom";
import "./ProjectPage.css";
import Navbar from "../components/Navbar";

function ProjectPage() {
  const params = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/{params.pageId}`);
  };

  return (
    <>
      <Navbar />
      <div className="projectpage-container">
        <div className="project-header">selected projects</div>
        <div className="project-list">
          <div className="project-item item1" onClick={handleClick}>
            Fastr - NomadBank
          </div>
          <div className="project-item item2">Website Redesign - Bloobloom</div>
          <div className="project-item item3">Saudipix</div>
          <div className="project-item item4">InvestNow.ng Redesign</div>
          <div className="project-item item5">WaterTalk</div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
