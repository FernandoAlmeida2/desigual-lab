"use client";

import NavBar from "@/components/Navbar/Navbar";
import { useEffect, useState, useRef } from "react";
import { Styles } from "./page.styles";
import Footer from "@/components/Footer/Footer";
import ContentTop from "@/components/ContentTop/ContentTop";
import DesigualMap from "@/components/DesigualMap/DesigualMap";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import Script from "next/script";
import { headers } from "next/headers";

/* declare global {
  interface Window {
    googleTranslateElementInit: any;
    google: any;
  }
}

window.googleTranslateElementInit = window.googleTranslateElementInit || {}; */

export default function Home() {
  const [preLoading, setPreLoading] = useState(true);
  //const [currentTopic, setCurrentTopic] = useState("initial");
  const ref = useRef<HTMLDivElement>(null);
  const { currentTopic } = useSelector((state: RootState) => state.topic);
  const nonce = headers().get("x-nonce");

  /* function changeTopic(topic: string) {
    setCurrentTopic(topic);
  } */

  useEffect(() => {
    setTimeout(() => {
      setPreLoading(false);
    }, 4500);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentTopic]);


  /* const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  }; */

  /* useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []); */

  if (preLoading) return <Styles.PreLoaderGif></Styles.PreLoaderGif>;

  return (
    <>
      {currentTopic === "inequality-map" ? (
        <DesigualMap />
      ) : (
        <Styles.MainContainer currentTopic={currentTopic} ref={ref}>
          <Styles.LogoPMF
            src="/images/logos/Logo_PMF_Ver_Mono_Branco.svg"
            alt="logo pmf"
          />
          <NavBar />
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
      <Script
          src="/_next/static/chunks/fd9d1056-28d8581e6e02654e.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/69-05e2b4d6c8006538.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/main-app-f5c8d25c8479457f.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/578c2090-075eb9318a86d41b.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/30a37ab2-f3a096e8c768c331.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/94730671-27906ffb01048816.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/795d4814-283306e60742f68d.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/8e1d74a4-0c5a13bbc1871c7b.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/181-24897ff0e2c152aa.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/835-229fe9d9298440c5.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/app/page-6544158b858fdfe0.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
        <Script
          src="/_next/static/chunks/app/layout-eb6ca078cf5be9c9.js"
          strategy="afterInteractive"
          nonce={nonce!}
        />
    </>
  );
}
