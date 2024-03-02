"use client";

import { ChangeEvent } from "react";
import { Styles } from "./tabPanel.style";
import { indicatorsList } from "@/app/lib/placeholder-data";
import { Indicator } from "@/app/lib/definitions";

type Props = {
  selectedSubject: string;
  changeSubject: Function;
  currentIndicator: Indicator;
  changeIndicator: Function;
  changeTopic: Function;
};

export default function TabPanel({
  selectedSubject,
  changeSubject,
  currentIndicator,
  changeIndicator,
  changeTopic
}: Props) {
  return (
    <Styles.Container>
      <Styles.ReturnOption onClick={() => changeTopic("Quem-somos")}>
          Desigual Lab
        </Styles.ReturnOption>
      <Styles.SelectContainer>
        <Styles.LogoMap src="/images/logos/logo-map.svg" alt="logo panel" />
        <Styles.SelectBox>
          <Styles.SelectItem
            value={selectedSubject}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              changeSubject(e.target.value)
            }
          >
            {indicatorsList.map((indicatorGroup, index) => (
              <option value={indicatorGroup.subject} key={index}>
                {indicatorGroup.subject}
              </option>
            ))}
          </Styles.SelectItem>
        </Styles.SelectBox>

        <Styles.SelectBox>
          <Styles.SelectItem
            value={currentIndicator.title}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              changeIndicator(e.target.value)
            }
          >
            {indicatorsList
              .filter(
                (indicatorGroup) => indicatorGroup.subject === selectedSubject
              )[0]
              .indicators.map((indicator, index) => (
                <option value={indicator.title} key={index}>
                  {indicator.title}
                </option>
              ))}
          </Styles.SelectItem>
        </Styles.SelectBox>
        <div>{currentIndicator.subtitle}</div>
      </Styles.SelectContainer>

      <div>
        <Styles.OdsIcon>
          <img src={`/images/logos_ods/${currentIndicator.odsPath}`} />
        </Styles.OdsIcon>
        <Styles.InfoBox>
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
        </Styles.InfoBox>
      </div>
    </Styles.Container>
  );
}
