import React, { useState } from "react";
import cx from "classnames";

import TinderCard from "react-tinder-card";

import { Card } from "../../components/Card";

import { Pair, ID, useCardsStore } from "../../stores/cards";

import styles from "./Stack.module.css";

type Direction = "left" | "right" | "up" | "down";

interface StackProps {
  items: Pair<any, string>[];
}

export const Stack = ({ items }: StackProps) => {
  const [workingitems, setWorkingItems] = useState(items);
  const increaseRating = useCardsStore(state => state.increaseRating);
  const decreaseRating = useCardsStore(state => state.decreaseRating);

  const swiped = (direction: Direction, id: ID) => {
    if (direction === "right") {
      increaseRating(id);
    } else if (direction === "left") {
      decreaseRating(id);
    }
    console.log("removing: " + id + " " + direction);
  };

  const outOfFrame = () => {
    setWorkingItems(workingitems.slice(0, workingitems.length - 1));
  };

  return (
    <div className={styles.cardContainer}>
      {workingitems.map(item => (
        <TinderCard
          className={styles.swipe}
          key={item.id}
          // flickOnSwipe={false}
          preventSwipe={["up", "down"]}
          onSwipe={dir => swiped(dir, item.id)}
          onCardLeftScreen={() => outOfFrame()}
        >
          <Card text={item.pair[0].value} otherText={item.pair[1].value} />
        </TinderCard>
      ))}
    </div>
  );
};
