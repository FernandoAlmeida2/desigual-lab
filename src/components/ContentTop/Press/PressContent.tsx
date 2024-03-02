import { styled } from "styled-components";

type Props = {
  newsName: string;
  toggleNews: Function;
};

export default function PressContent({ newsName, toggleNews }: Props) {
  return (
    <Container onClick={() => toggleNews(newsName)}>
      <PressContainer>
        <iframe
          id="iframe-mapa"
          src={`/images/press/${newsName}.pdf`}
          width="100%"
          height="100%"
        ></iframe>
      </PressContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(132, 132, 132, 0.6);
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PressContainer = styled.div`
  width: 50vw;
  height: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.34vw;
  overflow-y: auto;
`;
