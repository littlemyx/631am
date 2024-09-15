import React from "react";

import { useRoutesStore, RouteStates } from "../../stores/router";
import { useCardsStore } from "../../stores/cards";

import styles from "./Main.module.css";
import { Button } from "../../components/Button";
import { CogIcon } from "@/icons/Cog";

export const Main = () => {
  const changeRoute = useRoutesStore(store => store.change);
  const generateSome = useCardsStore(store => store.generateSome);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.item}>
          <button
            className={styles.button}
            onClick={() => {
              generateSome(10);
              changeRoute(RouteStates.STACK);
            }}
          >
            Go To Cards
          </button>
        </div>
        <div className={styles.item}>
          <button
            className={styles.button}
            onClick={() => changeRoute(RouteStates.NEW_ENTITY)}
          >
            Add New
          </button>
        </div>
        <div className={styles.item}>
          <button
            className={styles.button}
            onClick={() => changeRoute(RouteStates.EDIT)}
          >
            Edit
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          className={styles.cogButton}
          onClick={() => changeRoute(RouteStates.SETTINGS)}
        >
          <CogIcon width={20} height={20} />
        </Button>
      </div>
    </div>
  );
};
