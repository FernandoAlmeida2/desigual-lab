"use client";

import { MouseEventHandler, useState } from "react";
//import Link from "next/link";

import { Styles } from "./Navbar.styles";
import { ArrowMenu } from "@/app/lib/definitions";
import { InitialMenu } from "@/app/lib/placeholder-data";

type Props = {
  currentTopic: string;
  changeTopic: Function;
};

export default function NavBar({ currentTopic, changeTopic }: Props) {
  const [arrowClicked, setArrowClicked] = useState(InitialMenu);

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
            <Styles.MenuIcon onClick={() => changeTopic("presentation")} />
          ) : (
            <Styles.Navbar>
              <Styles.NavTitle
                isSelected={false}
                onClick={() => subItensHandler("desigualLab")}
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
                    isSelected={currentTopic === "presentation"}
                    onClick={() => changeTopic("presentation")}
                  >
                    Apresentação
                  </Styles.NavItem>
                  <Styles.NavItem
                    isSelected={false}
                    onClick={() => subItensHandler("assignments")}
                  >
                    Atribuições
                    {arrowClicked.assignments ? (
                      <Styles.ArrowUpIcon />
                    ) : (
                      <Styles.ArrowDownIcon />
                    )}
                  </Styles.NavItem>
                  {arrowClicked.assignments && (
                    <>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "drawing"}
                        onClick={() => changeTopic("drawing")}
                      >
                        Desenha
                      </Styles.NavSubItem>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "evaluate"}
                        onClick={() => changeTopic("evaluate")}
                      >
                        Avalia
                      </Styles.NavSubItem>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "accelerate"}
                        onClick={() => changeTopic("accelerate")}
                      >
                        Acelera
                      </Styles.NavSubItem>
                    </>
                  )}
                  <Styles.NavItem
                    isSelected={currentTopic === "legislation"}
                    onClick={() => changeTopic("legislation")}
                  >
                    Legislação
                  </Styles.NavItem>
                  <Styles.NavItem
                    isSelected={currentTopic === "regulation"}
                    onClick={() => changeTopic("regulation")}
                  >
                    Regulamento
                  </Styles.NavItem>
                  <Styles.NavItem
                    isSelected={currentTopic === "organization"}
                    onClick={() => changeTopic("organization")}
                  >
                    Organograma
                  </Styles.NavItem>
                  <Styles.NavItem
                    isSelected={currentTopic === "address"}
                    onClick={() => changeTopic("address")}
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
                    isSelected={false}
                    onClick={() => subItensHandler("who")}
                  >
                    Quem somos
                  </Styles.NavItem>
                  {arrowClicked.team && <></>}
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
                        onClick={() => changeTopic("internal")}
                      >
                        Internos
                      </Styles.NavSubItem>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "external"}
                        onClick={() => changeTopic("external")}
                      >
                        Externos
                      </Styles.NavSubItem>
                      <Styles.NavSubItem
                        isSelected={currentTopic === "international"}
                        onClick={() => changeTopic("international")}
                      >
                        Internacionais
                      </Styles.NavSubItem>
                    </>
                  )}
                  <Styles.NavItem
                    isSelected={currentTopic === "training"}
                    onClick={() => changeTopic("training")}
                  >
                    Capacitação
                  </Styles.NavItem>
                </>
              )}

              <Styles.NavTitle
                isSelected={false}
                onClick={() => changeTopic("inequality-map")}
              >
                Mapa da desigualdade (2023)
              </Styles.NavTitle>

              <Styles.NavTitle
                isSelected={false}
                onClick={() => subItensHandler("projects")}
              >
                Projetos
                {arrowClicked.projects ? (
                  <Styles.ArrowUpIcon />
                ) : (
                  <Styles.ArrowDownIcon />
                )}
              </Styles.NavTitle>

              {arrowClicked.projects && <></>}

              <Styles.NavTitle isSelected={false}>
                Publicações
                {arrowClicked.publications ? (
                  <Styles.ArrowUpIcon />
                ) : (
                  <Styles.ArrowDownIcon />
                )}
              </Styles.NavTitle>
              <Styles.NavTitle isSelected={false}>
                Agenda
                {arrowClicked.schedule ? (
                  <Styles.ArrowUpIcon />
                ) : (
                  <Styles.ArrowDownIcon />
                )}
              </Styles.NavTitle>
              <Styles.NavTitle
                isSelected={currentTopic === "press"}
                onClick={() => changeTopic("press")}
              >
                Imprensa
              </Styles.NavTitle>
              {arrowClicked.team && (
                <>
                  <Styles.NavItem
                    isSelected={false}
                    onClick={() => subItensHandler("who")}
                  >
                    Quem somos
                  </Styles.NavItem>
                  {arrowClicked.team && <></>}
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
                  <Styles.NavItem
                    isSelected={currentTopic === "training"}
                    onClick={() => changeTopic("training")}
                  >
                    Capacitação
                  </Styles.NavItem>
                </>
              )}
              <Styles.NavTitle
                isSelected={currentTopic === "contact"}
                onClick={() => changeTopic("contact")}
              >
                Contato
              </Styles.NavTitle>
              <Styles.NavTitle
                isSelected={false}
                onClick={() => changeTopic("initial")}
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
