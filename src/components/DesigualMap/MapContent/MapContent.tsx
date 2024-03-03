"use client";

import { ChangeEvent, useState } from "react";
import { Styles } from "./mapContent.style";
import { IFRAME_BASE_URL } from "@/app/constants/urls";

type Props = {
  mapPath: string;
  tablePath: string;
};

export default function MapContent({ mapPath, tablePath }: Props) {
  const [itemSelected, setItemSelected] = useState("Mapa");

  return (
    <Styles.Container>
      <Styles.SelectItem
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
        </Styles.SelectItem>
      {itemSelected === "Mapa" ? (
        <iframe
          id="iframe-mapa"
          src={`${IFRAME_BASE_URL}/${mapPath}`}
          width="100%"
          height="100%"
          style={{ background: "#CCE6FF", padding: "5vw"}}
        ></iframe>
      ) : (
        <iframe
          id="iframe-table"
          src={`${IFRAME_BASE_URL}/${tablePath}`}
          width="100%"
          height="100%"
          style={{ background: "#FFFCDC", padding: "1vw", border: "0.1vw solid #d5d5d5"}}
        ></iframe>
      )}
    </Styles.Container>
  );
}
