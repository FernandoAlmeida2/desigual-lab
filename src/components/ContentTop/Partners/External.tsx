import Link from "next/link";
import styles from "../contentTop.module.css";

export default function External() {
  return (
    <div className={styles.contentTop}>
      <h1>Parceiros externos</h1>
      <br />
      <Link href="http://www.cgpr.ufc.br/"><h2>Centro de Gestão para Resultados</h2></Link>
      <br />
      <h3>Guilherme Diniz Irffi</h3>
      <p>
        Bolsista de Produtividade em Pesquisa do CNPq –
        Nível 2 Doutor, CAEN / UFC, 2011
        <br />
        Áreas de Pesquisa: Métodos Quantitativos em Economia, Avaliação de
        Políticas Públicas, Economia da Educação.
        <br />
        <Link href="http://lattes.cnpq.br/8821559850261716">
          http://lattes.cnpq.br/8821559850261716
        </Link>
      </p>
      <br />
      <h3>Diego Rafael Fonseca Carneiro</h3>
      <p>
        Economista formado pela Universidade
        Federal do Ceará,<br />
        Mestre e Doutor em Economia pelo CAEN (Capes 5).<br />
        <Link href="http://lattes.cnpq.br/4199618744331611">
          http://lattes.cnpq.br/4199618744331611
        </Link>
      </p>
      <br />
      <h3>Felipe de Sousa Bastos</h3>
      <p>
        Pesquisador no Programa de Pós-graduação em Economia (CAEN/UFC)<br />
        <Link href="http://lattes.cnpq.br/5346220628829577">
          http://lattes.cnpq.br/5346220628829577
        </Link>
      </p>
      <br />
      <h3>Isabela Braga Sales</h3>
      <p>
      Pesquisadora no Programa de Pós-graduação em Economia (CAEN/UFC)<br />
        <Link href="http://lattes.cnpq.br/3551505694474507">
          http://lattes.cnpq.br/3551505694474507
        </Link>
      </p>
    </div>
  );
}
