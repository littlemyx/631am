import React from "react";
import PropTypes from "prop-types";

import Sunrise from "@/components/images/Sunrise";
import Contacts from "@/components/Contacts";
import Description from "@/components/Description";
import Experiments from "@/components/Experiments";
import CV from "@/components/CV";
import Articles from "@/components/Articles";

import css from "./Body.module.css";

const Body = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.sunrise}>
        <Sunrise width={150} height={128} />
      </div>
      <div>
        <Description />
      </div>
      <br />
      {/* <div>
        <Experiments />
      </div> */}
      <div>
        <CV />
      </div>
      <div>
        <Articles />
      </div>
      <br />
      <div>
        <Contacts />
      </div>
    </div>
  );
};

Body.propTypes = {};

export default Body;
