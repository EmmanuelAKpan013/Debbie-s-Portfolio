import { useNavigate } from "react-router-dom";
import "./ProjectPage.css";
import Navbar from "../components/Navbar";

function ProjectPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="projectpage-container">
        <div className="project-header">selected projects</div>
        <div className="project-lists">
          <div
            className="project-list item1"
            onClick={() => {
              navigate(`/project/nomadbank`);
            }}
          >
            Fastr - NomadBank
          </div>
          <div
            className="project-list item2"
            onClick={() => {
              navigate(`/project/blomblom`);
            }}
          >
            Website Redesign - Bloobloom
          </div>
          <div
            className="project-list item3"
            onClick={() => {
              navigate(`/project/saudipix`);
            }}
          >
            Saudipix
          </div>
          <div
            className="project-list item4"
            onClick={() => {
              navigate(`/project/investnow`);
            }}
          >
            InvestNow.ng Redesign
          </div>
          <div
            className="project-list item5"
            onClick={() => {
              navigate(`/project/watertalk`);
            }}
          >
            WaterTalk
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
