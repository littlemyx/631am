import React, { useState } from "react";

import { useRoutesStore, RouteStates } from "./stores/router";

import { Wrapper } from "./pages/Wrapper";
import { Main } from "./pages/Main";
import { AddNew } from "./pages/AddNew";
import { Challenge } from "./pages/Challenge";
import { Edit } from "./pages/Edit";
import { Settings } from "./pages/Settings";

import styles from "./index.module.css";

export const Routes = () => {
  const route = useRoutesStore(state => state.route);

  switch (route) {
    case RouteStates.MAIN:
    default:
      return <Main />;
    case RouteStates.STACK:
      return (
        <Wrapper title="Stack">
          <div className={styles.container}>
            <Challenge />
          </div>
        </Wrapper>
      );
    case RouteStates.NEW_ENTITY:
      return (
        <Wrapper title="Add New">
          <div className={styles.container}>
            <AddNew />
          </div>
        </Wrapper>
      );
    case RouteStates.EDIT:
      return (
        <Wrapper title="Edit">
          <div className={styles.container}>
            <Edit />
          </div>
        </Wrapper>
      );
    case RouteStates.SETTINGS:
      return (
        <Wrapper title="Settings">
          <div className={styles.container}>
            <Settings />
          </div>
        </Wrapper>
      );
  }
};
