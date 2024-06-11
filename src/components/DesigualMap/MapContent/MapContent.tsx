"use client";

import { ChangeEvent, useState } from "react";
import styles from "./mapContent.module.css";
import { IFRAME_BASE_URL } from "@/constants/urls";

type Props = {
  mapPath: string;
  tablePath: string;
};

export default function MapContent({ mapPath, tablePath }: Props) {
  const [itemSelected, setItemSelected] = useState("Mapa");

  return (
    <div className={styles.container}>
      <select className={styles.selectItem}
          value={itemSelected}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setItemSelected(e.target.value)
          }
          required
        >
          <option value="Mapa" selected>
            Mapa
          </option>
          <option value="Tabela">
            Tabela
          </option>
        </select>
      {itemSelected === "Mapa" ? (
        <iframe
          id="iframe-mapa"
          src={`${IFRAME_BASE_URL}/${mapPath}`}
          width="100%"
          height="100%"
          style={{ background: "#a5cbeb", padding: "4vw", border: "none"}}
        ></iframe>
      ) : (
        <iframe
          id="iframe-table"
          src={`${IFRAME_BASE_URL}/${tablePath}`}
          width="100%"
          height="100%"
          style={{ background: "#FFFCDC", padding: "2vw", border: "none"}}
        ></iframe>
      )}
    </div>
  );
}
