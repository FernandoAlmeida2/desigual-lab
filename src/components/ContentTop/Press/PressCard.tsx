"use client";

import { NewsCard } from "@/lib/placeholder-data";
import styles from "./press.module.css";
import { useState } from "react";

type Props = {
  newsData: NewsCard;
};

export default function PressCard({ newsData }: Props) {
  const [showNews, setShowNews] = useState(false);
  const [newsHover, setNewsHover] = useState(false);

  if (showNews)
    return (
      <div
        className={styles.mainContainer}
        onClick={() => setShowNews(!showNews)}
      >
        <div className={styles.pressContainer}>
          <iframe
            id="iframe-mapa"
            src={`/images/press/${newsData.filePath}`}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    );

  return (
    <div
      className={styles.pressCard}
      onMouseEnter={() => setNewsHover(true)}
      onMouseLeave={() => setNewsHover(false)}
    >
      <img className={styles.pressImage} src={`/images/press/${newsData.imagePath}`} />
      <div
        className={`${styles.pressContent} ${
          newsHover ? styles.showNews : styles.hideNews
        }`}
      >
        <h2>{newsData.title}</h2>
        <p>{newsData.source}</p>
        <p>
          {newsData.date} - {newsData.mediaType}
        </p>
        <button className={styles.pressButton} onClick={() => setShowNews(!showNews)}>LER MATÉRIA</button>
      </div>
    </div>
  );
}
