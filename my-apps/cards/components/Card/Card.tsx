import React, { useCallback, useEffect, useMemo, useState } from "react";
import cx from "classnames";
import { a, useSpring } from "@react-spring/web";

import { CardContent } from "../CardCotent";

import styles from "./Card.module.css";

interface CardProps {
  text: string;
  otherText: string;
}

export const Card = ({ text, otherText }: CardProps) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
    onRest: () => {
      setIsRotating(false);
    }
  });

  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    if (isRotating) {
      setFlipped(value => !value);
    }
  }, [isRotating]);

  const rotateCard = useCallback(() => {
    setIsRotating(true);
  }, []);

  const content = useMemo(
    () => (
      <CardContent onFlip={rotateCard}>
        <h3>{text}</h3>
      </CardContent>
    ),
    [rotateCard, text]
  );

  const flippedContent = useMemo(
    () => (
      <CardContent onFlip={rotateCard}>
        <h3>{otherText}</h3>
      </CardContent>
    ),
    [otherText, rotateCard]
  );

  return (
    <div className={styles.container}>
      <a.div
        className={cx(styles.c, { [styles.inactiveSide]: flipped })}
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      >
        {content}
      </a.div>
      <a.div
        className={cx(styles.c, { [styles.inactiveSide]: !flipped })}
        style={{
          opacity,
          transform,
          rotateX: "180deg"
        }}
      >
        {flippedContent}
      </a.div>
    </div>
  );
};
