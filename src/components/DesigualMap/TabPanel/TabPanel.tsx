"use client";

import { ChangeEvent, useState } from "react";
import { Styles } from "./tabPanel.style";
import { indicatorsList } from "@/app/lib/placeholder-data";
import { Indicator } from "@/app/lib/definitions";

type Props = {
  selectedSubject: string;
  changeSubject: Function;
  currentIndicator: Indicator | null;
  changeIndicator: Function;
  changeTopic: Function;
};

export default function TabPanel({
  selectedSubject,
  changeSubject,
  currentIndicator,
  changeIndicator,
  changeTopic,
}: Props) {
  const [toggleInfo, setToggleInfo] = useState(false);

  return (
    <Styles.Container>
      <Styles.ReturnOption onClick={() => changeTopic("initial")}>
        <span>&lt;&nbsp;</span>
        Desigual Lab
      </Styles.ReturnOption>
      <Styles.LogoMap src="/images/logos/logo-map.svg" alt="logo panel" />
      <Styles.SelectContainer toggleInfo={toggleInfo}>
        <Styles.SelectItem
          value={selectedSubject === "none" ? "" : selectedSubject}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            changeSubject(e.target.value)
          }
          required
        >
          <option value="" disabled selected hidden>
            Eixo temático
          </option>
          {indicatorsList.map((indicatorGroup, index) => (
            <option value={indicatorGroup.subject} key={index}>
              {indicatorGroup.subject}
            </option>
          ))}
        </Styles.SelectItem>

        <Styles.SelectItem
          value={currentIndicator ? currentIndicator.title : ""}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            changeIndicator(e.target.value)
          }
          required
          disabled={selectedSubject === "none"}
        >
          <option value="" disabled selected hidden>
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
        </Styles.SelectItem>
        {currentIndicator && (
          <Styles.SubtitleText>{currentIndicator.subtitle}</Styles.SubtitleText>
        )}
      </Styles.SelectContainer>

      {currentIndicator &&
        (toggleInfo ? (
          <div>
            <Styles.MinusIcon onClick={() => setToggleInfo(!toggleInfo)} />
            <Styles.InfoBox>
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
              <Styles.OdsIcon>
                <img src={`/images/logos_ods/${currentIndicator.odsPath}`} />
              </Styles.OdsIcon>
            </Styles.InfoBox>
          </div>
        ) : (
          <Styles.PlusIcon onClick={() => setToggleInfo(!toggleInfo)} />
        ))}
    </Styles.Container>
  );
}
