"use client";
import styles from "../contentTop.module.css";
import Link from "next/link";
import { dataNews } from "@/lib/placeholder-data";
import PressCard from "./PressCard";

export default function Printed() {
  return (
    <div className={styles.newsContainer}>
      {dataNews.map((newsData, index) => (
        <PressCard newsData={newsData} key={index} />
      ))}
      {/* <h1>Imprensa</h1>
      <br />
      <h2>Asessoria de comunicação</h2>
      <Link href="mailto: ascom@iplanfor.fortaleza.ce.gov.br">
        ascom@iplanfor.fortaleza.ce.gov.br
      </Link>
      <br />
      <Link href="mailto: iplanfordigital@gmail.com">
        iplanfordigital@gmail.com
      </Link>
      <br />
      <br /> */}
    </div>
  );
}
