import React from "react";

import Position from "./Position";

import data from "./data.json";

import css from "./Experience.module.css";

const Experience = () => {
  return (
    <div>
      <p className={css.title}>WORK EXPERIENCE</p>
      {data.map(({ company, position, period, achievements }) => (
        <Position
          key={period.from}
          company={company}
          position={position}
          achievements={achievements}
          period={period}
        />
      ))}
    </div>
  );
};

export default Experience;
