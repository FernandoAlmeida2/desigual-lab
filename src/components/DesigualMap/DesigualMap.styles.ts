import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 84vw;
  padding: 1vw;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    /* background-image: url(/images/cover-top-2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; */
    opacity: 0.3;
  }
`;

export const Styles = {
  Container,
};
