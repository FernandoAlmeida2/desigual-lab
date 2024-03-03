"use client";

import MapContent from "./MapContent/MapContent";
import MapValues from "./MapValues/MapValues";
import TabPanel from "./TabPanel/TabPanel";
import { Styles } from "./DesigualMap.styles";
import { useState, useRef, useEffect } from "react";
import { indicatorsList } from "@/app/lib/placeholder-data";

type Props = {
  changeTopic: Function;
};

export default function DesigualMap({ changeTopic }: Props) {
  const [selectedSubject, setSelectedSubject] = useState("none");
  const [selectedIndicator, setSelectedIndicator] = useState("none");
  const ref = useRef<HTMLDivElement>(null);

  const currentIndicator =
    selectedIndicator === "none"
      ? null
      : indicatorsList
          .filter(
            (indicatorGroup) => indicatorGroup.subject === selectedSubject
          )[0]
          .indicators.filter(
            (indicator) => indicator.title === selectedIndicator
          )[0];

  function changeSubject(newSubject: string) {
    setSelectedSubject(newSubject);
    setSelectedIndicator(
      indicatorsList.filter(
        (indicatorGroup) => indicatorGroup.subject === newSubject
      )[0].indicators[0].title
    );
  }

  function changeIndicator(newIndicator: string) {
    setSelectedIndicator(
      indicatorsList
        .filter(
          (indicatorGroup) => indicatorGroup.subject === selectedSubject
        )[0]
        .indicators.filter((indicator) => indicator.title === newIndicator)[0]
        .title
    );
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <Styles.Container ref={ref}>
      <Styles.ContainerTop>
        <TabPanel
          currentIndicator={currentIndicator}
          selectedSubject={selectedSubject}
          changeIndicator={changeIndicator}
          changeSubject={changeSubject}
          changeTopic={changeTopic}
        />
        {currentIndicator ? (
          <MapContent
            mapPath={currentIndicator.mapPath}
            tablePath={currentIndicator.tablePath}
          />
        ) : (
          <Styles.InitialImgRight
            src="/images/cover-top-1.png"
            alt="cover-img"
          />
        )}
      </Styles.ContainerTop>
      {currentIndicator ? (
        <MapValues
          bestDistrict={currentIndicator.bestDistrict}
          bestValue={currentIndicator.bestValue}
          worseDistrict={currentIndicator.worseDistrict}
          worseValue={currentIndicator.worseValue}
          mean={currentIndicator.mean}
          asymmetry={currentIndicator.asymmetry}
          histogramPath={currentIndicator.histogramPath}
        />
      ) : (
        <Styles.InitialImgBottom
          src="/images/cover-map-bottom.png"
          alt="cover-img"
        />
      )}
    </Styles.Container>
  );
}
