import React from "react";
import { FaCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import './Experience.css';

const experienceData = [
  {
    year: "2023 - Present",
    role: "FrontEnd Developer / Website Designer / UI Designer",
    company: "Infouna Technologies, Udupi",
    description: "Built fully responsive websites from scratch using HTML, CSS, Bootstrap, and JavaScript, handling both UI design and front-end development. Designed user interfaces in Figma and translated them into functional web pages. Currently enhancing skills by learning React.js for building dynamic web applications."
  },
  {
    year: "2022 - 2022",
    role: "Web Developer (Beginner)",
    company: "Website Makers Bannanje , Udupi",
    description: "Assisted in maintaining and updating websites, handling basic front-end tasks using HTML, CSS, and WordPress. Gained foundational experience in web development practices. ",
  },
  {
    year: "2018– 2021",
    role: "Government Polytechnic, Udupi",
    company: "Board Of Technical Education",
    description: "Diploma in Computer Science and Engineering",
  },
];

const Experience = () => {
  return (
    <div className="experience-wrap" id="experience">
        <div className="container">
        <h3 className="text-center mb-5">Experience</h3>
        <div className="timeline">
            {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item">
                <div className="timeline-icon">
                <FaCircle size={12} />
                </div>
                <div className="timeline-content">
                <h5 className="fw-bold">{exp.role}</h5>
                <h6 className="company-name">{exp.company}</h6>
                <p className="text-muted">{exp.year}</p>
                <p style={{fontWeight :300 }}>{exp.description}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Experience;
