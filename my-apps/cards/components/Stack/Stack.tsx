import React, { useState } from "react";
import cx from "classnames";

import TinderCard from "react-tinder-card";

import { Card } from "../../components/Card";

import styles from "./Stack.module.css";

interface Item {
  text: string;
  alterText: string;
}

interface StackProps {
  items: Item[];
}

export const Stack = ({ items }: StackProps) => {
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = name => {
    console.log(name + " left the screen!");
  };

  return (
    <div className={styles.cardContainer}>
      {items.map(item => (
        <TinderCard
          className={styles.swipe}
          key={item.text}
          onSwipe={dir => swiped(dir, item.text)}
          onCardLeftScreen={() => outOfFrame(item.text)}
        >
          <Card text={item.text} otherText={item.alterText} />
        </TinderCard>
      ))}
    </div>
  );
};
