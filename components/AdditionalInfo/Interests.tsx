import React from "react";

import css from "./Interests.module.css";

const interests = [
  "Web Technologies",
  "WebXR",
  "GameDev",
  "Natural Sciences",
  "Movies"
];

const Interests = () => {
  return (
    <div className={css.interestList}>
      {interests.map(interest => (
        <span key={interest} className={css.interest}>
          {interest}
        </span>
      ))}
    </div>
  );
};

export default Interests;
