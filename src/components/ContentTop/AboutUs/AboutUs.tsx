import Link from "next/link";
import styles from "../contentTop.module.css";

export default function AboutUs() {
  return (
    <div className={styles.contentTop}>
      <h1>Corpo técnico</h1>
      <h3>Iplanfor</h3>
      <h3>Diretora Fundadora do Desigual Lab:</h3>
      <p>
        Prof. Elisângela Teixeira,
        <br />
        <Link href="mailto: elis.teixeira@iplanfor.fortaleza.ce.gov.br">
          elis.teixeira@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h3>Diretor Fundador do Desigual Lab:</h3>
      <p>
        Élcio Batista,
        <br />
        <Link href="mailto: elcio.batista@iplanfor.fortaleza.ce.gov.br">
          elcio.batista@iplanfor.fortaleza.ce.gov.br
        </Link>
        <br />
      </p>
      <br />
      <h3>Gestor de Projetos:</h3>
      <p>
        Raynara dos Santos Silva,
        <br />
        <Link href="mailto: raynara.silva@iplanfor.fortaleza.ce.gov.br">
          raynara.silva@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h3>Economista/Econometristas:</h3>
      <p>
        Anderson Bezerra,
        <br />
        <Link href="mailto: anderson.bezerra@iplanfor.fortaleza.ce.gov.br">
          anderson.bezerra@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h3>Cientista Social/Político:</h3>
      <p>
        Felipe Neto,
        <br />
        <Link href="mailto: felipe.lima@iplanfor.fortaleza.ce.gov.br">
          felipe.lima@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h3>Estatístico:</h3>
      <p>
        Rômulo Andrade,
        <br />
        <Link href="mailto: romulo.andrade@iplanfor.fortaleza.ce.gov.br">
          romulo.andrade@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h3>Cientistas de Dados:</h3>
      <p>
        Pedro Florêncio,
        <br />
        <Link href="mailto: pedro.almeida@iplanfor.fortaleza.ce.gov.br">
          pedro.almeida@iplanfor.fortaleza.ce.gov.br
        </Link>
        <br />
        Vinícius Gadelha,
        <br />
        <Link href="mailto: luiz.freitas@iplanfor.fortaleza.ce.gov.br">
          luiz.freitas@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h3>Desenvolvedor de Software:</h3>
      <p>
        Fernando Almeida,
        <br />
        <Link href="mailto: fernando.almeida@iplanfor.fortaleza.ce.gov.br">
          fernando.almeida@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
      <h3>Estagiários de graduação:</h3>
      <p>
        Renata Marques,
        <br />
        <Link href="mailto: renata.oliveira@iplanfor.fortaleza.ce.gov.br">
          renata.oliveira@iplanfor.fortaleza.ce.gov.br
        </Link>
      </p>
      <br />
    </div>
  );
}
