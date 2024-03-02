import { styled } from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Container = styled.div<{
  currentTopic: string;
}>`
  width: 52.34vw;
  height: 52.34vw;
  border-top-right-radius: 18vw;
  background-color: ${(props) =>
    props.currentTopic === "initial" ? "none" : "rgb(229, 196, 0, 0.7)"};
  border: ${(props) =>
    props.currentTopic === "initial" ? "0.4vw solid #fff" : "none"};
  animation: ${(props) =>
    props.currentTopic === "initial" ? "none" : "fadeContentIn 1s"};
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  @keyframes fadeContentIn {
    0% {
      background-color: rgb(229, 196, 0, 0);
    }
    100% {
      background-color: rgb(229, 196, 0, 0.7);
    }
  }
`;

const ContentTop = styled.div`
  width: 34.8vw;
  height: 52.34vw;
  padding: 8.17vw 1vw 4vw 8.76vw;
  color: #261b0b;
  overflow-y: auto;

  /* width */
  &::-webkit-scrollbar {
    width: 0.5vw;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgb(229, 196, 0, 0.2);
    border-radius: 1vw;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgb(229, 196, 0, 0.2);
    width: 2vw;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(229, 196, 0, 0.7);
  }

  &::-webkit-scrollbar-track-piece {
    margin: 12vw 0 4vw 0;
  }

  h1 {
    font-size: 1.5vw;
    margin-bottom: 1vw;
    font-weight: 700;
  }

  p {
    text-align: justify;
    font-size: 1vw;
    line-height: 1.3vw;
  }
`;

const TitleText = styled.div`
  font-size: 5.5vw;
  line-height: 5vw;
  color: #fff;
  margin: 25vw 0 0 2.19vw;
`;

const PressCard = styled.div`
  width: 24.7vw;
  height: 13.8vw;
  display: flex;
  gap: 0.2vw;
  justify-content: space-between;
  padding: 0.6vw;
  background-color: rgb(229, 196, 0, 0.8);
  margin-bottom: 2vw;
  /* border: 1.2vw solid rgb(229, 196, 0, 0.8); */

  button {
    font-size: 1vw;
    width: 5vw;
    height: 2.5vw;
    display: flex;
    align-items: center;
    background-color: rgb(229, 196, 0, 0.4);
    border: none;
    gap: 0.5vw;
  }

  button:hover {
    cursor: pointer;
  }
`;

const PressImg = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 10vw;
  }
`;

const PressContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2vw;
`;

const ArrowRightIcon = styled(MdOutlineKeyboardArrowRight)`
  color: #000;
  font-size: 1.2vw;

  &:hover {
    cursor: pointer;
  }
`;

export const Styles = {
  Container,
  ContentTop,
  TitleText,
  PressCard,
  ArrowRightIcon,
  PressImg,
  PressContent
};
