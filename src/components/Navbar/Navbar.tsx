"use client";

import { MouseEventHandler, useState } from "react";
//import Link from "next/link";

import styles from "./navbar.module.css";
import { ArrowMenu } from "@/lib/definitions";
import { InitialMenu } from "@/lib/placeholder-data";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useDispatch } from "react-redux";
import { changeTopic } from "@/lib/features/topics/topicSlice";
import { VscMenu } from "react-icons/vsc";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

/* type Props = {
  currentTopic: string;
  changeTopic: Function;
}; */

export default function NavBar() {
  const [arrowClicked, setArrowClicked] = useState({
    ...InitialMenu,
    ["desigualLab"]: true,
  });
  const { currentTopic } = useSelector((state: RootState) => state.topic);
  const dispatch = useDispatch();

  function subItensHandler(name: ArrowMenu) {
    setArrowClicked({ ...arrowClicked, [name]: !arrowClicked[name] });
  }

  function ArrowIcon({ isClicked }: { isClicked: boolean }) {
    return isClicked ? (
      <MdOutlineKeyboardArrowDown className={styles.arrowIcon} />
    ) : (
      <MdOutlineKeyboardArrowUp className={styles.arrowIcon} />
    );
  }

  return (
    <>
      {
        <div className={styles.container}>
          <img
            className={styles.logo}
            src="/images/logos/desigualLab-vert-white.svg"
            alt="logo desigual lab"
          />
          {currentTopic === "initial" ? (
            <VscMenu
              onClick={() => dispatch(changeTopic("presentation"))}
              className={styles.menuIcon}
            />
          ) : (
            <div className={styles.navbar}>
              <div
                className={`${styles.navItem} ${styles.title}`}
                onClick={() => {
                  dispatch(changeTopic("presentation"));
                  subItensHandler("desigualLab");
                }}
              >
                Desigual Lab
                <ArrowIcon isClicked={arrowClicked.desigualLab} />
              </div>

              {arrowClicked.desigualLab && (
                <>
                  <div
                    className={`${styles.navItem} ${styles.subtitle} ${
                      currentTopic === "assignments" ? styles.selected : ""
                    }`}
                    onClick={() => {
                      dispatch(changeTopic("assignments"));
                      subItensHandler("assignments");
                    }}
                  >
                    Atribuições
                    {/* {arrowClicked.assignments ? (
                      <Styles.ArrowUpIcon />
                    ) : (
                      <Styles.ArrowDownIcon />
                    )} */}
                  </div>
                  <div
                    className={`${styles.navItem} ${styles.subtitle}`}
                    onClick={() => subItensHandler("legislation")}
                  >
                    Legislação
                    <ArrowIcon isClicked={arrowClicked.legislation} />
                  </div>
                  {arrowClicked.legislation && (
                    <>
                      <div
                        className={`${styles.navItem} ${styles.subSubtitle} ${
                          currentTopic === "decree" ? styles.selected : ""
                        }`}
                        onClick={() => {
                          dispatch(changeTopic("decree"));
                        }}
                      >
                        Decreto
                      </div>
                      <div
                        className={`${styles.navItem} ${styles.subSubtitle} ${
                          currentTopic === "memo" ? styles.selected : ""
                        }`}
                        onClick={() => {
                          dispatch(changeTopic("memo"));
                        }}
                      >
                        Memorando
                      </div>
                    </>
                  )}
                  <div
                    className={`${styles.navItem} ${styles.subtitle} ${
                      currentTopic === "regulation" ? styles.selected : ""
                    }`}
                    onClick={() => dispatch(changeTopic("regulation"))}
                  >
                    Regulamento
                  </div>
                  <div
                    className={`${styles.navItem} ${styles.subtitle} ${
                      currentTopic === "organization" ? styles.selected : ""
                    }`}
                    onClick={() => dispatch(changeTopic("organization"))}
                  >
                    Organograma
                  </div>
                  <div
                    className={`${styles.navItem} ${styles.subtitle} ${
                      currentTopic === "address" ? styles.selected : ""
                    }`}
                    onClick={() => dispatch(changeTopic("address"))}
                  >
                    Endereço
                  </div>
                </>
              )}

              <div
                className={`${styles.navItem} ${styles.title}`}
                onClick={() => subItensHandler("team")}
              >
                Equipe
                <ArrowIcon isClicked={arrowClicked.team} />
              </div>
              {arrowClicked.team && (
                <>
                  <div
                    className={`${styles.navItem} ${styles.subtitle} ${
                      currentTopic === "about-us" ? styles.selected : ""
                    }`}
                    onClick={() => dispatch(changeTopic("about-us"))}
                  >
                    Quem somos
                  </div>
                  <div
                    className={`${styles.navItem} ${styles.subtitle}`}
                    onClick={() => subItensHandler("partners")}
                  >
                    Parceiros
                    <ArrowIcon isClicked={arrowClicked.partners} />
                  </div>
                  {arrowClicked.partners && (
                    <>
                      <div
                        className={`${styles.navItem} ${styles.subSubtitle} ${
                          currentTopic === "internal" ? styles.selected : ""
                        }`}
                        onClick={() => dispatch(changeTopic("internal"))}
                      >
                        Internos
                      </div>
                      <div
                        className={`${styles.navItem} ${styles.subSubtitle} ${
                          currentTopic === "external" ? styles.selected : ""
                        }`}
                        onClick={() => dispatch(changeTopic("external"))}
                      >
                        Externos
                      </div>
                      <div
                        className={`${styles.navItem} ${styles.subSubtitle} ${
                          currentTopic === "international"
                            ? styles.selected
                            : ""
                        }`}
                        onClick={() => dispatch(changeTopic("international"))}
                      >
                        Internacionais
                      </div>
                    </>
                  )}
                  {/*  <Styles.NavItem
                    isSelected={currentTopic === "training"}
                    onClick={() => changeTopic("training")}
                  >
                    Capacitação
                  </Styles.NavItem> */}
                </>
              )}

              <div
                className={`${styles.navItem} ${styles.title}`}
                onClick={() => dispatch(changeTopic("inequality-map"))}
              >
                Mapa da desigualdade (2023)
              </div>

              {/* <Styles.NavTitle
                isSelected={false}
                onClick={() => subItensHandler("projects")}
              >
                Projetos
                {arrowClicked.projects ? (
                  <Styles.ArrowUpIcon />
                ) : (
                  <Styles.ArrowDownIcon />
                )}
              </Styles.NavTitle> */}

              {arrowClicked.projects && <></>}

              {/* <Styles.NavTitle isSelected={false}>
                Publicações
                {arrowClicked.publications ? (
                  <Styles.ArrowUpIcon />
                ) : (
                  <Styles.ArrowDownIcon />
                )}
              </Styles.NavTitle> */}
              {/* <Styles.NavTitle isSelected={false}>
                Agenda
                {arrowClicked.schedule ? (
                  <Styles.ArrowUpIcon />
                ) : (
                  <Styles.ArrowDownIcon />
                )}
              </Styles.NavTitle> */}
              <div
                className={`${styles.navItem} ${styles.title} ${
                  currentTopic === "press" ? styles.selected : ""
                }`}
                onClick={() => dispatch(changeTopic("press"))}
              >
                Imprensa
              </div>

              <div
                className={`${styles.navItem} ${styles.title} ${
                  currentTopic === "tech-sheet" ? styles.selected : ""
                }`}
                onClick={() => dispatch(changeTopic("tech-sheet"))}
              >
                Ficha Técnica
              </div>

              <div
                className={`${styles.navItem} ${styles.title} ${
                  currentTopic === "contact" ? styles.selected : ""
                }`}
                onClick={() => dispatch(changeTopic("contact"))}
              >
                Contato
              </div>
              <div
                className={`${styles.navItem} ${styles.title}`}
                onClick={() => dispatch(changeTopic("initial"))}
              >
                Início
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
}
