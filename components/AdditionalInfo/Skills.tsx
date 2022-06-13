import React from "react";

import css from "./Skills.module.css";

const mySkills = [
  "React",
  "Vue",
  "Redux",
  "JavaScript",
  "TypeScript",
  "Webpack",
  "Proactivity",
  "Fast learning",
  "Team teaching"
];

const Skills = () => {
  return (
    <div className={css.skillsList}>
      {mySkills.map(skill => (
        <span key={skill} className={css.skill}>
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;
