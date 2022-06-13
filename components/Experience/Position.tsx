import React from "react";

import { dataConverter } from "@/utils/date";

import css from "./Position.module.css";

type Props = {
  company: string;
  position: string;
  achievements: Array<string>;
  period: { from: string; to: string | null };
};

const Position = ({ company, position, achievements, period }: Props) => {
  return (
    <div className={css.wrapper}>
      <p className={css.position}>{position}</p>
      <p className={css.company}>{company}</p>
      <p className={css.period}>
        {dataConverter(period.from)} - {dataConverter(period.to)}
      </p>
      <div>
        <span className={css.achievements}>Achievements/Stack:</span>
        <ul className={css.achievementsList}>
          {achievements.map((achievement, index) => (
            <li key={index}>
              <p className={css.description}>{achievement}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Position;
