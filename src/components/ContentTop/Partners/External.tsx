import Link from "next/link";
import { Styles } from "../ContentTop.styles";

export default function External() {
  return (
    <Styles.ContentTop>
      <h1>Parceiros externos</h1>

      <p>
        Guilherme Diniz Irffi, Bolsista de Produtividade em Pesquisa do CNPq –
        Nível 2 Doutor, CAEN / UFC, 2011
        <br />
        Áreas de Pesquisa: Métodos Quantitativos em Economia, Avaliação de
        Políticas Públicas; Economia da Educação
        <br />
      </p>
      <br />
      <p>
        Diego Rafael Fonseca Carneiro, Economista formado pela Universidade
        Federal do Ceará, é Mestre e Doutor em Economia pelo CAEN (Capes 5)<br />
        <Link href="http://lattes.cnpq.br/4199618744331611">
          http://lattes.cnpq.br/4199618744331611
        </Link>
      </p>
      <br />
      <p>
        Felipe de Sousa Bastos, Pesquisador no Programa de Pós-graduação em
        Economia (CAEN/UFC)<br />
        <Link href="http://lattes.cnpq.br/5346220628829577">
          http://lattes.cnpq.br/5346220628829577
        </Link>
      </p>
    </Styles.ContentTop>
  );
}
