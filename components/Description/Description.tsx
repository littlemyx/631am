import React from "react";
import PropTypes from "prop-types";

import css from "./Description.module.css";

const Description = () => {
  return (
    <p className={css.wrapper}>
      It is{" "}
      <time className={css.clock} dateTime="06:31">
        6<span className={css.colon}>:</span>31AM
      </time>{" "}
      and my name is Andrei Mukhin
      <br />
      and I&apos;m a frontend developer.
    </p>
  );
};

Description.propTypes = {};

export default Description;
