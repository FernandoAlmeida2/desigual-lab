import styles from "../contentTop.module.css";

export default function TechnicalSheet() {
  return (
    <div className={styles.contentTop}>
      <h1>Ficha Técnica</h1>
      <h3>Página Web do Desigual Lab</h3>
      <p>
        Concepção: Elisângela Teixeira e Élcio Batista
        <br />
        Coordenação de desenvolvimento: Fernando Almeida
        <br />
        UX/UI Designer: Jaizza Figueiredo
      </p>
      <br />
      <h3>Mapa das Desigualdades</h3>
      <p>
        Concepção: Elisângela Teixeira, Felipe Franklin<br />
        Análise e processamento de Dados: Pedro Florêncio, Anderson Bezerra,
        Rômulo Andrade
        <br />
        Desenvolvimento: Pedro Florêncio, Fernando Almeida
        <br />
        UX/UI Designer: Jaizza Figueiredo
      </p>
    </div>
  );
}
