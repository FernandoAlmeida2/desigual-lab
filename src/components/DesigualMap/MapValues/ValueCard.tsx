"use client";

import { useState } from "react";
import styles from "./mapValues.module.css";

type Props = {
  value: string;
  description: string;
};

export default function ValueCard({ value, description }: Props) {
  const [toggleInfo, setToggleInfo] = useState(false);
  const [cardHover, setCardHover] = useState(false);

  return (
    <div
      className={`${styles.valueCard} ${cardHover ? styles.cardHover : ""}`}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <div>{value}</div>
      <div
        className={`${styles.valueDescription} ${
          cardHover ? styles.blackColor : styles.yellowColor
        }`}
      >
        {description}
      </div>
    </div>
  );
}
