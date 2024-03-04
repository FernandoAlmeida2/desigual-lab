import { styled } from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  gap: 0.6vw;
`;

const HistogramBox = styled.div`
  height: 15vw;
  width: 24.25vw;

  /* iframe:hover {
    background-color: black;
  } */
`

const ValueCard = styled.div<{
  toggleInfo: boolean;
}>`
  width: 24.25vw;
  max-width: 24.25vw;
  height: 15vw;
  font-weight: 300;
  background-color: #FFDD00;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6vw;
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #FFDD00;
  }
`;

const ValueDescription = styled.div<{
  toggleInfo: boolean;
}>`
  position: absolute;
  width: 15vw;
  text-align: center;
  top: 7.05vw;
  left: 16vw;
  rotate: 270deg;
  font-size: 1vw;
  color: #FFDD00;
`;


export const Styles = {
  Container,
  HistogramBox,
  ValueCard,
  ValueDescription
};
