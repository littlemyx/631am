import React from "react";
import PropTypes from "prop-types";

import css from "./Description.module.css";

const Description = () => {
  return (
    <p className={css.wrapper}>
      My name is Andrei Mukhin
      <br />
      and I&apos;m a frontend developer.
    </p>
  );
};

Description.propTypes = {};

export default Description;
