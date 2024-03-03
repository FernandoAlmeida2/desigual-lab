import { styled } from "styled-components";
import { RiArrowLeftSLine } from "react-icons/ri";
import { HiPlus, } from "react-icons/hi";
import { FaPlus, FaMinus } from "react-icons/fa";

const Container = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
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

const SelectContainer = styled.div<{
  toggleInfo: boolean;
}>`
  margin-top: ${(props) => props.toggleInfo ? "4vw" : "11vw"};
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
`;

const SelectItem = styled.select`
  width: 16.3vw;
 
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

const SubtitleText = styled.div`
  width: 45vw;
  font-size: 3vw;
  line-height: 3.5vw;
  font-weight: 300;
`

const PlusIcon = styled(FaPlus)`
  color: #005cca;
  margin-top: 0.5vw;
  font-size: 1.5vw;

  &:hover {
    cursor: pointer;
  }
`;

const MinusIcon = styled(FaMinus)`
  color: #005cca;
  font-size: 1.5vw;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;

  &:hover {
    cursor: pointer;
  }
`;

const InfoBox = styled.div`
  font-size: 0.8vw;
  line-height: 1.6vw;
  display: flex;
  align-items: flex-end;
  gap: 2vw;
  font-weight: 300;
  font-size: 0.6vw;
  line-height: 0.8vw;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2vw;
  }

  span {
    font-weight: 400;
  }
`;

const OdsIcon = styled.div`
  padding: 0 1.5vw;
  img {
    width: 5.72vw;
  }
`;

export const Styles = {
  Container,
  ReturnOption,
  ArrowLeftIcon,
  LogoMap,
  SelectContainer,
  SelectItem,
  SubtitleText,
  PlusIcon,
  MinusIcon,
  OdsIcon,
  InfoBox,
};
