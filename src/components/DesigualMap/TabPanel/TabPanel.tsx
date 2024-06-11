"use client";

import { ChangeEvent, useState } from "react";
import styles from "./tabPanel.module.css";
import { indicatorsList } from "@/lib/placeholder-data";
import { Indicator } from "@/lib/definitions";
import { useDispatch } from "react-redux";
import { changeTopic } from "@/lib/features/topics/topicSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {
  selectedSubject: string;
  changeSubject: Function;
  currentIndicator: Indicator | null;
  changeIndicator: Function;
};

export default function TabPanel({
  selectedSubject,
  changeSubject,
  currentIndicator,
  changeIndicator,
}: Props) {
  const [toggleInfo, setToggleInfo] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div
        className={styles.returnOption}
        onClick={() => dispatch(changeTopic("initial"))}
      >
        <span>&lt;&nbsp;</span>
        Desigual Lab
      </div>
      <img
        className={styles.logoMap}
        src="/images/logos/logo-map.svg"
        alt="logo panel"
        onClick={() => dispatch(changeTopic("initial"))}
      />
      <div
        className={`${styles.selectContainer} ${
          toggleInfo ? styles.moreInfo : styles.lessInfo
        }`}
      >
        <select className={styles.selectItem}
          value={selectedSubject === "none" ? "" : selectedSubject}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            changeSubject(e.target.value)
          }
          required
        >
          <option
            value=""
            selected
            disabled
            hidden
            /* disabled={selectedSubject === "none"}
            hidden={selectedSubject === "none"} */
          >
            Eixo temático
          </option>
          {indicatorsList.map((indicatorGroup, index) => (
            <option value={indicatorGroup.subject} key={index}>
              {indicatorGroup.subject}
            </option>
          ))}
        </select>

        <select className={styles.selectItem}
          value={currentIndicator ? currentIndicator.title : ""}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            changeIndicator(e.target.value)
          }
          required
          disabled={selectedSubject === "none"}
        >
          <option
            value=""
            selected
            disabled
            hidden
            /* disabled={selectedSubject === "none"}
            hidden={selectedSubject === "none"} */
          >
            Indicador
          </option>
          {selectedSubject !== "none" &&
            indicatorsList
              .filter(
                (indicatorGroup) => indicatorGroup.subject === selectedSubject
              )[0]
              .indicators.map((indicator, index) => (
                <option value={indicator.title} key={index}>
                  {indicator.title}
                </option>
              ))}
        </select>
        {currentIndicator && (
          <div className={styles.subtitleText}>{currentIndicator.subtitle}</div>
        )}
      </div>

      {currentIndicator &&
        (toggleInfo ? (
          <div>
            <FaMinus className={styles.minusIcon} onClick={() => setToggleInfo(!toggleInfo)} />
            <div className={styles.infoBox}>
              <div>
                <p>
                  <span>ANO-BASE:</span> {currentIndicator.year}
                </p>
                <p>
                  <span>FÓRMULA:</span> {currentIndicator.formula}
                </p>
                <p>
                  <span>FONTE(s):</span> {currentIndicator.source}
                </p>
                <p>
                  <span>Observações:</span> {currentIndicator.remarks}
                </p>
              </div>
              <div className={styles.odsIcon}>
                <img src={`/images/logos_ods/${currentIndicator.odsPath}`} />
              </div>
            </div>
          </div>
        ) : (
          <FaPlus className={styles.plusIcon} onClick={() => setToggleInfo(!toggleInfo)} />
        ))}
    </div>
  );
}
