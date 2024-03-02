import { styled } from "styled-components";

const Container = styled.div`
  width: 50vw;
  height: 84vw;
  display: flex;
  flex-direction: column;
  gap: 8vw;
  z-index: 1;
  position: relative;
`;

const ReturnOption = styled.div`
  position: absolute;
  top: 1.5vw;
  left: 40vw;
  color: green;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const LogoMap = styled.img`
  width: 7vw;
`

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`

const SelectBox = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const SelectItem = styled.select`
  width: 30.21vw;
  height: 2.36vw;
  border: none;

  &:focus {
    outline: none;
  }
`


const OdsIcon = styled.div`
    height: 6vw;
    img{
      width: 4.72vw;  
    }
`

const InfoBox = styled.div`
    font-size: 0.8vw;
    line-height: 1.6vw;
    span{
        color: green;
        font-weight: 700;
    }
`

export const Styles = {
  Container,
  ReturnOption,
  LogoMap,
  SelectContainer,
  SelectBox,
  SelectItem,
  OdsIcon,
  InfoBox
};
