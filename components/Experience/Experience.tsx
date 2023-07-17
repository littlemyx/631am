import React from "react";

import Position from "./Position";

import data from "./data.json";

import css from "./Experience.module.css";

const Experience = () => {
  return (
    <div>
      <div className={css.title}>Education</div>
      <p>
        MATI — Russian State Technological University <br />
        2010 - 2015 <br />
        Bachelor of Computer Science
      </p>
      <br />
      <p>
        MATI — Russian State Technological University <br />
        2015 - 2017 <br />
        Master of Computer Science
      </p>
      <br />
      <br />
      <div className={css.title}>Languages</div>
      <p>English - C1</p>
      <br />
      <br />
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
