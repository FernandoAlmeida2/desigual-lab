import styles from "../contentTop.module.css";

export default function Presentation() {
  return (
    <div className={styles.contentTop}>
      <h1>
        Apresentação
      </h1>
      <h3>
        Novo paradigma para enfrentar desigualdades sociais, econômicas e
        territoriais
      </h3>
      <p>
      O <span style={{fontWeight: "700"}}>Desigual Lab</span>, unidade do Instituto de Planejamento da Prefeitura de Fortaleza, no Brasil, tem como 
      objetivo melhorar a qualidade e o número de avaliações de impacto de programas municipais. 
      A iniciativa aprimora a distribuição de recursos públicos e promove um ciclo inovador para melhores 
      resultados na comunidade.
      </p>
      <br />
      <p><strong>A estratégia do laboratório inclui:</strong><br/><br />
     <span style={{fontWeight: "700"}}>1.</span> Desenvolver experimentos controlados e explorar experimentos naturais tanto para iniciativas 
          públicas existentes como futuras; <br />
          <br /><span style={{fontWeight: "700"}}>2.</span> Avaliar experimentalmente políticas públicas, fornecendo evidências relevantes a gestores 
          municipais;<br /><br />
          <span style={{fontWeight: "700"}}>3.</span> Acelerar e escalonar inovações em aliança com entes públicos, empresas de impacto social e organizações 
          sem fins lucrativos do terceiro setor. 
      </p>
    </div>
  );
}
