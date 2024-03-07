import { styled } from "styled-components";

const Container = styled.div`
  width: 50.5vw;
  height: 42vw;
  position: relative;
`;

const SelectItem = styled.select`
  position: absolute;
  left: 1vw;
  top: 1vw;
  width: 8vw;
  font-size: 1.1vw;
  font-weight: 400;
  border-style: solid;
  color: #005cca;
  border-width: 0 0 0.1vw 0;
  border-color: #000;
  background-color: rgb(0,0,0,0);

  &:focus {
    outline: none;
  }
`;

export const Styles = {
  Container,
  SelectItem
};
