import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NomadPage from "./pages/NomadPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:pageId" element={<NomadPage />} />
          {/* <Route path="/project/:pageId" element={<ProjectPage />} /> */}
          {/* <Route path="/project/:pageId" element={<ProjectPage />} /> */}
          {/* <Route path="/project/:pageId" element={<ProjectPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
