import React from "react";

import css from "./Languages.module.css";

const Languages = () => {
  return (
    <>
      <div>
        <p className={css.language}>English</p>
        <p className={css.level}>English Independent User (B1,B2)</p>
      </div>
      <div>
        <p className={css.language}>Russian</p>
        <p className={css.level}>Native Proficiency</p>
      </div>
    </>
  );
};

export default Languages;
