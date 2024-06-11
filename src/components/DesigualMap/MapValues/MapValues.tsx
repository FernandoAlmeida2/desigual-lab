import { IFRAME_BASE_URL } from "@/constants/urls";
import styles from "./mapValues.module.css";
import ValueCard from "./ValueCard";
import { useState } from "react";

type Props = {
  bestDistrict: string | number;
  bestValue: number;
  worseDistrict: string | number;
  worseValue: number;
  mean: number;
  asymmetry: number;
  histogramPath: string;
};

export default function MapValues({
  bestDistrict,
  bestValue,
  worseDistrict,
  worseValue,
  mean,
  asymmetry,
  histogramPath,
}: Props) {

  return (
    <div
      className={styles.container}
    >
      <div className={styles.histogramBox}>
        <iframe
          id="iframe-histogram"
          src={`${IFRAME_BASE_URL}/${histogramPath}`}
          width="105%"
          height="105%"
          style={{
            padding: "1vw",
            border: "none",
          }}
        ></iframe>
      </div>

      <ValueCard
        value={`${worseValue.toLocaleString(
          "pt-BR"
        )}-${bestValue.toLocaleString("pt-BR")}`}
        description="MENOR-MAIOR VALOR"
      />
      <ValueCard value={mean.toLocaleString("pt-BR")} description="MÉDIA" />
      <ValueCard
        value={asymmetry.toLocaleString("pt-BR")}
        description="ÍNDICE DE DESIGUALDADE"
      />
    </div>
  );
}
