import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./Skills.css";

const SkillProgress = ({ skill, level, variant }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-4"
    >
      <div className="skill-header">
        <h6 className="mb-2">{skill}</h6>
        <span className="skill-percentage">{level}%</span>
      </div>
      <ProgressBar 
        now={inView ? level : 0} 
        variant={variant} 
        className="custom-progress"
      />
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { skill: "HTML & CSS", level: 90, bgColor: "#ff3c00" },
    { skill: "JavaScript", level: 85, bgColor: "#ff3c00" },
    { skill: "React.js", level: 80, bgColor: "#ff3c00" },
    { skill: "Bootstrap", level: 85, bgColor: "#ff3c00" },
    { skill: "Figma", level: 70, bgColor: "#ff3c00" },
  ];

  return (
    <div className="skills-wrap" id='skills'>
      <Container>
        <motion.h3
          className="mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h3>
        <div className="row align-items-center">
          <div className="col-md-6">
            {skills.map((item) => (
              <SkillProgress
                key={item.skill}
                skill={item.skill}
                level={item.level}
                variant={item.variant}
              />
            ))}
          </div>
          <div className="col-md-6 text-center">
            <div className="skills-image">
              <img src={`${process.env.PUBLIC_URL}/assets/skills.jpg`} alt="" className="w-100"/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
