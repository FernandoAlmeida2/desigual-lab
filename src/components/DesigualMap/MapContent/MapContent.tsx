"use client";

import { useState } from "react";
import { Styles } from "./mapContent.style";
import { IFRAME_BASE_URL } from "@/app/constants/urls";

type Props = {
  mapPath: string;
  tablePath: string;
};

export default function MapContent({ mapPath, tablePath }: Props) {
  const [itemSelected, setItemSelected] = useState("map");

  return (
    <Styles.Container>
      <Styles.NavBar>
        <Styles.NavItem
          isSelected={itemSelected === "map"}
          onClick={() => itemSelected !== "map" && setItemSelected("map")}
        >
          Mapa
        </Styles.NavItem>
        <Styles.NavItem
          isSelected={itemSelected === "table"}
          onClick={() => itemSelected !== "table" && setItemSelected("table")}
        >
          Tabela
        </Styles.NavItem>
      </Styles.NavBar>
      {itemSelected === "map" ? (
        <iframe
          id="iframe-mapa"
          src={`${IFRAME_BASE_URL}/${mapPath}`}
          width="80%"
          height="80%"
          style={{ background: "rgb(209, 209, 209, 0)", padding: "1vw", border: "0.1vw solid #d5d5d5"}}
        ></iframe>
      ) : (
        <iframe
          id="iframe-table"
          src={`${IFRAME_BASE_URL}/${tablePath}`}
          width="100%"
          height="100%"
          style={{ background: "rgb(209, 209, 209, 0)", padding: "1vw", border: "0.1vw solid #d5d5d5"}}
        ></iframe>
      )}
    </Styles.Container>
  );
}
