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

const ValueCard = styled.div`
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
    background-color: #55b2ff;
    div {
      color: #000;
    }
  }
`;

const ValueDescription = styled.div`
  position: absolute;
  font-weight: 400;
  width: 24.25vw;
  text-align: center;
  bottom: 0.6vw;
  left: 0;
  font-size: 1vw;
  color: #FFDD00;
`;


export const Styles = {
  Container,
  HistogramBox,
  ValueCard,
  ValueDescription
};
