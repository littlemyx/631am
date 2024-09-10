import React from "react";

import { dataConverter } from "@/utils/date";

import css from "./PetProjects.module.css";
import classNames from "classnames";

interface Project {
  name: string;
  description: string;
  position: string;
  website: string;
  status: string;
  period: {
    from: string;
    to: string;
  };
}

const projects: Project[] = [
  {
    name: "Shwabler",
    position: "Founder / Developer",
    description: "A dating app for ones who prefer texting to photos.",
    website: "https://shwabler.com",
    status: "sunsetted",
    period: {
      from: "2018",
      to: "2020"
    }
  },
  {
    name: "From Scratch",
    position: "Co-Founder / Developer",
    description:
      "Service for creators and developers for finding a command their projects.",
    website: "https://fromscratch.space",
    status: "sunsetted",
    period: {
      from: "2020",
      to: "2021"
    }
  }
];

const PetProjects = () => {
  return (
    <div className={css.wrapper}>
      {projects.map(
        ({
          name,
          position,
          description,
          website,
          status,
          period: { from, to }
        }) => (
          <div key={name} className={css.project}>
            <p className={css.position}>{position}</p>
            <p className={css.company}>{name}</p>
            <p className={css.period}>
              {dataConverter(from)} - {dataConverter(to)}
            </p>

            <p className={css.description}>{description}</p>
            <p className={css.status}>status: {status}</p>
            <p className={css.website}>
              <span>website: </span>
              <a href={website} className={css.link}>
                {new URL(website).hostname}
              </a>
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default PetProjects;
