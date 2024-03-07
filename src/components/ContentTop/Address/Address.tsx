import { styled } from "styled-components";
import { Styles } from "../ContentTop.styles";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";

export default function Address() {
  return (
    <Styles.ContentTop>
      <h1>Endereço</h1>
      <p>
        R. Vinte e Cinco de Março, 268 - Centro, Fortaleza - CE, 60060-120{" "}
        <Link href={"https://maps.app.goo.gl/JR8JoYnHfE5VKfhs9"}>
          <MapsIcon />
        </Link>
      </p>
    </Styles.ContentTop>
  );
}

const MapsIcon = styled(SiGooglemaps)`
  font-size: 1.2vw;

  &:hover {
    cursor: pointer;
  }
`;
