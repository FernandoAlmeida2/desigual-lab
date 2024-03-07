"use client";

import { MouseEventHandler, useState } from "react";
//import Link from "next/link";

import { Styles } from "./Navbar.styles";
import { ArrowMenu } from "@/app/lib/definitions";
import { InitialMenu } from "@/app/lib/placeholder-data";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import { useDispatch } from "react-redux";
import { changeTopic } from "@/app/lib/features/topics/topicSlice";

/* type Props = {
  currentTopic: string;
  changeTopic: Function;
}; */

export default function NavBar() {
  const [arrowClicked, setArrowClicked] = useState({...InitialMenu, ["desigualLab"]: true});
  const { currentTopic } = useSelector((state: RootState) => state.topic);
  const dispatch = useDispatch();

  function subItensHandler(name: ArrowMenu) {
    setArrowClicked({ ...arrowClicked, [name]: !arrowClicked[name] });
  }

  return (
    <>
      {
        <Styles.Container>
          <Styles.Logo
            src="/images/logos/desigualLab-vert-white.svg"
            alt="logo desigual lab"
          />
          {currentTopic === "initial" ? (
            <Styles.MenuIcon
              id="menuIcon"
              onClick={() => dispatch(changeTopic("presentation"))}
            />
          ) : (
            <Styles.Navbar>
              <Styles.NavTitle
                isSelected={false}
                onClick={() => {
                  dispatch(changeTopic("presentation"));
                  subItensHandler("desigualLab");
                }}
              >
                Desigual Lab
                {arrowClicked.desigualLab ? (
                  <Styles.ArrowUpIcon />
                ) : (
                  <Styles.ArrowDownIcon />
                )}
              </Styles.NavTitle>

              {arrowClicked.desigualLab && (
                <>
                  <Styles.NavItem
                    isSelected={currentTopic === "assignments"}
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
                  </Styles.NavItem>
                  {/* {arrowClicked.assignments && (
                    <>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "drawing"}
                        onClick={() => dispatch(changeTopic("drawing"))}
                      >
                        Desenha
                      </Styles.NavSubItem>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "evaluate"}
                        onClick={() => dispatch(changeTopic("evaluate"))}
                      >
                        Avalia
                      </Styles.NavSubItem>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "accelerate"}
                        onClick={() => dispatch(changeTopic("accelerate"))}
                      >
                        Acelera
                      </Styles.NavSubItem>
                    </>
                  )} */}
                  <Styles.NavItem
                    isSelected={currentTopic === "legislation"}
                    onClick={() => dispatch(changeTopic("legislation"))}
                  >
                    Legislação
                  </Styles.NavItem>
                  <Styles.NavItem
                    isSelected={currentTopic === "regulation"}
                    onClick={() => dispatch(changeTopic("regulation"))}
                  >
                    Regulamento
                  </Styles.NavItem>
                  <Styles.NavItem
                    isSelected={currentTopic === "organization"}
                    onClick={() => dispatch(changeTopic("organization"))}
                  >
                    Organograma
                  </Styles.NavItem>
                  <Styles.NavItem
                    isSelected={currentTopic === "address"}
                    onClick={() => dispatch(changeTopic("address"))}
                  >
                    Endereço
                  </Styles.NavItem>
                </>
              )}

              <Styles.NavTitle
                isSelected={false}
                onClick={() => subItensHandler("team")}
              >
                Equipe
                {arrowClicked.team ? (
                  <Styles.ArrowUpIcon />
                ) : (
                  <Styles.ArrowDownIcon />
                )}
              </Styles.NavTitle>
              {arrowClicked.team && (
                <>
                  <Styles.NavItem
                    isSelected={currentTopic === "about-us"}
                    onClick={() => dispatch(changeTopic("about-us"))}
                  >
                    Quem somos
                  </Styles.NavItem>
                  <Styles.NavItem
                    isSelected={currentTopic === "tech-sheet"}
                    onClick={() => dispatch(changeTopic("tech-sheet"))}
                  >
                    Ficha Técnica
                  </Styles.NavItem>
                  <Styles.NavItem
                    isSelected={false}
                    onClick={() => subItensHandler("partners")}
                  >
                    Parceiros
                    {arrowClicked.partners ? (
                      <Styles.ArrowUpIcon />
                    ) : (
                      <Styles.ArrowDownIcon />
                    )}
                  </Styles.NavItem>
                  {arrowClicked.partners && (
                    <>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "internal"}
                        onClick={() => dispatch(changeTopic("internal"))}
                      >
                        Internos
                      </Styles.NavSubItem>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "external"}
                        onClick={() => dispatch(changeTopic("external"))}
                      >
                        Externos
                      </Styles.NavSubItem>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "international"}
                        onClick={() => dispatch(changeTopic("international"))}
                      >
                        Internacionais
                      </Styles.NavSubItem>
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

              <Styles.NavTitle
                isSelected={false}
                onClick={() => dispatch(changeTopic("inequality-map"))}
              >
                Mapa da desigualdade (2023)
              </Styles.NavTitle>

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
              <Styles.NavTitle
                isSelected={currentTopic === "press"}
                onClick={() => dispatch(changeTopic("press"))}
              >
                Imprensa
              </Styles.NavTitle>
              
              <Styles.NavTitle
                isSelected={currentTopic === "contact"}
                onClick={() => dispatch(changeTopic("contact"))}
              >
                Contato
              </Styles.NavTitle>
              <Styles.NavTitle
                isSelected={false}
                onClick={() => dispatch(changeTopic("initial"))}
              >
                Início
              </Styles.NavTitle>
            </Styles.Navbar>
          )}
        </Styles.Container>
      }
    </>
  );
}
