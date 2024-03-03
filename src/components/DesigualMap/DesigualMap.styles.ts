import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  padding: 0.6vw;


  /* &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(/images/cover-top-2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 0.3;
  } */
`;


const ContainerTop = styled.div`
  display: flex;
  gap: 1vw;
  padding-bottom: 0.5vw;
`

const InitialImgRight = styled.img`
  width: 48vw;
  height: 39.5vw;
  object-fit: cover;
`

const InitialImgBottom = styled.img`
  width: 98.9vw;
  object-fit: cover;
`

export const Styles = {
  Container,
  ContainerTop,
  InitialImgRight,
  InitialImgBottom
};
