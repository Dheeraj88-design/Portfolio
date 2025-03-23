import React, { useState, useEffect, useMemo } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("html-css-js");
  const [loadedFrames, setLoadedFrames] = useState({});

  // Define projects
  const projects = useMemo(() => ({
    "html-css-js": [
      { name: "SMS Financial", url: "https://smsfinancial.in/" },
      { name: "SKP Groups", url: "https://www.skpgroups.com/" },
      { name: "Malnad Cashews", url: "https://malnadcashews.com/" },
    ],
    wordpress: [
      { name: "Aga Udupi", url: "https://agaudupi.com/" },
      { name: "Sharada Residential School", url: "https://www.sharadaresidentialschool.edu.in/" },
      { name: "Baidashree", url: "https://www.baidashree.org/" },
    ],
    react: [
      { name: "GitHub User Finder", url: "https://dheeraj88-design.github.io/github-user-finder/" },
      { name: "E-Shop", url: "https://dheeraj88-design.github.io/E-Shop/" },
    ],
  }), []);

  // Reset loader states when switching tabs
  useEffect(() => {
    const newLoadState = {};
    projects[activeTab].forEach((_, index) => {
      newLoadState[index] = false; // Set all iframes as not loaded
    });
    setLoadedFrames(newLoadState);
  }, [activeTab, projects]);

  // Handle iframe load
  const handleIframeLoad = (index) => {
    setLoadedFrames((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="projects-wrap" id="projects">
      <div className="container">
        <h3 className="text-center mb-5">My Projects</h3>

        {/* Tabs */}
        <ul className="nav nav-tabs justify-content-center mb-5">
          {Object.keys(projects).map((key) => (
            <li className="nav-item mt-lg-0 mt-2" key={key}>
              <button
                className={`nav-link ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {key.replace(/-/g, " ").toUpperCase()}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div key={activeTab} className="tab-content">
          <div className="row g-4">
            {projects[activeTab].map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="project-item">
                <h4 className="mb-3">{project.name}</h4>

                  <div className="iframe-container">
                    {/* Loader (Show only if iframe is not loaded) */}
                    {!loadedFrames[index] && (
                      <div className="iframe-loader">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}

                    {/* Website Preview */}
                    <iframe
                      src={loadedFrames[index] ? project.url : project.url} // Ensure valid src
                      title={project.name}
                      className="project-preview"
                      loading="lazy"
                      onLoad={() => handleIframeLoad(index)}
                    ></iframe>
                  </div>
                  <a className="project-btn" href={project.url} target="_blank" rel="noopener noreferrer">
                    View Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
