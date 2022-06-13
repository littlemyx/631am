import React from "react";

import { dataConverter } from "@/utils/date";

import css from "./PetProjects.module.css";

const PetProjects = () => {
  return (
    <div>
      <p className={css.position}>Co-Founder / Developer</p>
      <p className={css.company}>From Scratch</p>
      <p className={css.period}>
        {dataConverter("11.10.2020")} - {dataConverter("10.11.2020")}
      </p>

      <p className={css.description}>
        Service for creators and developers for finding a command their
        projects.
      </p>

      <p>
        <span>website: </span>
        <a href="https://fromscratch.space" className={css.link}>
          fromscratch.space
        </a>
      </p>
    </div>
  );
};

export default PetProjects;
