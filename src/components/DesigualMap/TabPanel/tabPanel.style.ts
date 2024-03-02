import { styled } from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";

const Container = styled.div`
  width: 50vw;
  height: 84vw;
  display: flex;
  flex-direction: column;
  gap: 16vw;
  z-index: 1;
  position: relative;
  padding: 2vw 0 0 2vw;
`;

const ReturnOption = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 1.2vw;
  top: 1vw;
  right: 0vw;

  &:hover {
    cursor: pointer;
  }

  span {
    font-size: 1.5vw;
  }
`;

const ArrowLeftIcon = styled(RiArrowLeftSLine)`
  color: #4f4c4c;
  font-size: 1.2vw;

  &:hover {
    cursor: pointer;
  }
`;

const LogoMap = styled.img`
  width: 7vw;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;

const SelectBox = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const SelectItem = styled.select`
  width: 16.3vw;
  height: 2vw;
  font-size: 1.1vw;
  font-weight: 400;
  border-style: solid;
  color: #afb2b5;
  border-width: 0 0 0.1vw 0;
  border-color: #000;
  background-color: #fff;

  &:focus {
    outline: none;
  }

  &:valid {
    color: #005cca;
  }
  &:invalid {
    color: #afb2b5;
  }
`;

const SelectOption = styled.option``;

const OdsIcon = styled.div`
  height: 6vw;
  img {
    width: 4.72vw;
  }
`;

const InfoBox = styled.div`
  font-size: 0.8vw;
  line-height: 1.6vw;
  span {
    color: green;
    font-weight: 700;
  }
`;

export const Styles = {
  Container,
  ReturnOption,
  ArrowLeftIcon,
  LogoMap,
  SelectContainer,
  SelectBox,
  SelectItem,
  OdsIcon,
  InfoBox,
};
