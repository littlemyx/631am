import React from "react";

import Item from "./Item";
import Skills from "./Skills";
import PetProjects from "./PetProjects";
import Languages from "./Languages";
import Interests from "./Interests";

import css from "./AdditionalInfo.module.css";

const AdditionalInfo = () => {
  return (
    <div>
      <div className={css.item}>
        <Item title="PET PROJECTS">
          <PetProjects />
        </Item>
      </div>
    </div>
  );
};

export default AdditionalInfo;
