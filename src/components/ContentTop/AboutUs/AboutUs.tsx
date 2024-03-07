import Link from "next/link";
import { Styles } from "../ContentTop.styles";

export default function AboutUs() {
  return (
    <Styles.ContentTop>
      <h1>Corpo técnico</h1>
      <h2>IPLANFOR</h2>
      <h2>Diretora Fundadora do Desigual Lab:</h2>
      <p>
        Prof. Elisângela Teixeira,
        <br />
        <Link href="mailto: elis.teixeira@iplanfor.fortaleza.ce.gov.br">
          elis.teixeira@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h2>Diretor Fundador do Desigual Lab:</h2>
      <p>
        Élcio Batista,<br />
        <Link href="mailto: elcio.batista@iplanfor.fortaleza.ce.gov.br">
          elcio.batista@iplanfor.fortaleza.ce.gov.br
        </Link>
        <br />
      </p>
      <br />
      <h2>Gestor de Projetos:</h2>
      <p>
        Raynara dos Santos Silva,<br />
        <Link href="mailto: raynara.silva@iplanfor.fortaleza.ce.gov.br">
          raynara.silva@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h2>Economista/Econometristas:</h2>
      <p>
        Anderson Bezerra,<br />
        <Link href="mailto: anderson.bezerra@iplanfor.fortaleza.ce.gov.br">
          anderson.bezerra@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h2>Cientista Social/Político:</h2>
      <p>
        Felipe Neto,<br />
        <Link href="mailto: felipe.lima@iplanfor.fortaleza.ce.gov.br">
          felipe.lima@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h2>Estatístico:</h2>
      <p>
        Rômulo Andrade,<br />
        <Link href="mailto: romulo.andrade@iplanfor.fortaleza.ce.gov.br">
          romulo.andrade@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h2>Cientistas de Dados:</h2>
      <p>
        Pedro Florêncio,<br />
        <Link href="mailto: pedro.almeida@iplanfor.fortaleza.ce.gov.br">
          pedro.almeida@iplanfor.fortaleza.ce.gov.br
        </Link>
        <br />
        Vinícius Gadelha,<br />
        <Link href="mailto: luiz.freitas@iplanfor.fortaleza.ce.gov.br">
          luiz.freitas@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h2>Estagiários de graduação:</h2>
      <p>
        Renata Marques,<br />
        <Link href="mailto: renata.oliveira@iplanfor.fortaleza.ce.gov.br">
          renata.oliveira@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
    </Styles.ContentTop>
  );
}
