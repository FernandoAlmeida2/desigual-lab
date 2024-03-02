"use client";

import NavBar from "@/components/Navbar/Navbar";
import { useEffect, useState, useRef } from "react";
import { Styles } from "./page.styles";
import Footer from "@/components/Footer/Footer";
import ContentTop from "@/components/ContentTop/ContentTop";
import DesigualMap from "@/components/DesigualMap/DesigualMap";

export default function Home() {
  const [preLoading, setPreLoading] = useState(true);
  const [currentTopic, setCurrentTopic] = useState("initial");
  const ref = useRef<HTMLDivElement>(null);

  function changeTopic(topic: string) {
    setCurrentTopic(topic);
  }

  useEffect(() => {
    setTimeout(() => {
      setPreLoading(false);
    }, 4500);
  }, []);

  useEffect(() => {
      if (ref.current) {
        ref.current.scrollIntoView({         
          behavior: "smooth"
        })
      }
  }, [currentTopic]);

  if (preLoading) return <Styles.PreLoaderGif></Styles.PreLoaderGif>;

  return (
    <>
      {currentTopic === "inequality-map" ? (
        <DesigualMap changeTopic={changeTopic} />
      ) : (
        <Styles.MainContainer currentTopic={currentTopic} ref={ref}>
          <Styles.LogoPMF
            src="/images/logos/Logo_PMF_Ver_Mono_Branco.svg"
            alt="logo pmf"
          />
          <NavBar changeTopic={changeTopic} currentTopic={currentTopic} />
          <Styles.ContentContainer>
            <ContentTop currentTopic={currentTopic} />
            <Styles.ContainerBottom>
              <Styles.ContentBottomBox>
                <Styles.ContentBottom
                  currentTopic={currentTopic}
                ></Styles.ContentBottom>
              </Styles.ContentBottomBox>
              <Styles.ContentPoint
                currentTopic={currentTopic}
              ></Styles.ContentPoint>
            </Styles.ContainerBottom>
          </Styles.ContentContainer>
        </Styles.MainContainer>
      )}

      <Footer />
    </>
  );
}
