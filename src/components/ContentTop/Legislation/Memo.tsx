import styles from "../contentTop.module.css";
import { FiDownload } from "react-icons/fi";

export default function Memo() {
  return (
    <div className={styles.contentTop}>
      <div className={styles.downloadContainer}>
        <div className={styles.downloadItem}>
          <FiDownload className={styles.downloadIcon} />
          <a href={"/documents/MoU_Portuguese.pdf"} download>
            Português
          </a>
        </div>
        <div className={styles.downloadItem}>
          <FiDownload className={styles.downloadIcon} />
          <a href={"/documents/MoU_English.pdf"} download>
            Inglês
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>MEMORANDO DE ENTENDIMENTO</h1>

        <h3 style={{ textAlign: "center" }}>Pela inovação governamental no Município de Fortaleza</h3>

        <p style={{ textAlign: "center" }}>
          Este Memorando de Entendimento é celebrado em 5 de Março, 2024 em
          Fortaleza, Brasil
        </p>
        <br />
        <p>ENTRE</p>
        <br />
        <p>o Instituto de Planejamento de Fortaleza (IPLANFOR)</p>
        <br />
        <p>E</p>
        <br />
        <p style={{ textAlign: "center" }}>
          a UNIVERSIDADE DE CHICAGO (UChicago), em nome de seu DEVELOPMENT
          INNOVATION LAB - DIL (LABORATÓRIO DE INOVAÇÃO PARA O DESENVOLVIMENTO)
        </p>
      </div>
      <br />
      <p>
        O Instituto de Planejamento de Fortaleza (doravante &quot;IPLANFOR&quot;) e a
        Universidade de Chicago (doravante &quot;UChicago&quot;), neste instrumento,
        passam a ser denominados individualmente como &quot;Parte&quot; e, conjuntamente,
        &quot;Partes&quot;;
      </p>
      <br />
      <p>
        RECONHECENDO os interesses em comum das Partes na promoção da inovação
        governamental, bem como o compromisso compartilhado com políticas
        inovadoras, baseadas em evidências e com boa relação custo-benefício;
      </p>
      <br />
      <p>
        DESEJANDO conduzir pesquisas rigorosas para reunir evidências, realizar
        análises de custo-benefício e testar inovações para embasar as políticas
        públicas do Município de Fortaleza;
      </p>
      <br />
      <p>
        PRETENDENDO colaborar nesta pesquisa para embasar a concepção e
        implementação de políticas no âmbito do IPLANFOR; e
      </p>
      <br />
      <p>
        ACREDITANDO que uma parceria de sucesso pode ser estabelecida para
        alcançar os objetivos mencionados anteriormente;
      </p>
      <br />
      <p>AS PARTES CHEGARAM ao seguinte entendimento:</p>
      <br />
      <h3 style={{ textAlign: "center" }}>ARTIGO 1: ÁREAS DE COOPERAÇÃO</h3>
      <p>
        O objetivo deste Memorando é definir uma estrutura para a cooperação
        entre as Partes em iniciativas de inovação para o desenvolvimento. A
        colaboração visa facilitar a criação de políticas públicas
        personalizadas e promover a troca de informações, dados e tecnologias.
      </p>
      <br />
      <p>
        Com o objetivo comum de aprimorar os resultados econômicos e sociais, a
        cooperação no âmbito deste Memorando compreenderá as seguintes áreas,
        podendo não permanecer limitada a elas:
      </p>
      <p>
        • Promover um intercâmbio sobre prioridades, ideias e desafios políticos
        identificados, para inovar e melhorar os programas existentes.
      </p>
      <p>
        • Priorizar, testar e avaliar de forma rigorosa as inovações com o
        objetivo de ampliar as intervenções de melhor custo-benefício.
      </p>
      <p>
        • Colaborar com parceiros sem fins lucrativos, com fins lucrativos e
        acadêmicos para uma rigorosa coleta de dados e análise científica, além
        de atuar em outras atividades relacionadas ao objetivo comum.
      </p>
      <br />
      <p>
        As áreas iniciais onde as Partes poderão desenvolver esta cooperação
        incluem:
      </p>
      <p>
        • Projetar, implementar e comunicar o trabalho de uma Unidade de
        Inovação Municipal no âmbito do Sistema de Avaliação e Monitoramento do
        Município.
      </p>
      <p>
        • Desenvolver avaliações de impacto rigorosas para programas novos e
        existentes.
      </p>
      <p>
        • Reunir pesquisadores internos e externos para a implementação da
        pesquisa.
      </p>
      <br />
      <p>
        Os resultados a serem entregues serão revisados e mutuamente acordados
        anualmente, considerando as áreas prioritárias do Município.
      </p>
      <br />
      <h3 style={{ textAlign: "center" }}>ARTIGO 2: RESPONSABILIDADES DE FINANCIAMENTO</h3>

      <p>
        Durante a vigência do Acordo, a UChicago, em nome do DIL, concorda em
        fornecer seu tempo e financiar viagens de professores, funcionários e
        outros profissionais pertinentes das áreas acadêmica e de pesquisas do
        DIL. Como parte desta parceria, o DIL pode colaborar com outras
        organizações sem ou com fins lucrativos e de relevante experiência.
      </p>
      <br />
      <p>
        O DIL e nenhum parceiro exigirá assistência financeira para o
        conhecimento técnico fornecido em apoio ao Município. Caso adote as
        recomendações da política do DIL ou opte por firmar parceria com o DIL
        para testar alguma das possíveis inovações ou melhorias propostas, o
        Município financiará a implementação e o monitoramento ou coleta de
        dados associados à avaliação de impacto. Alternativamente, o Município e
        o DIL trabalharão em conjunto para identificar e obter financiamento
        adicional para cobrir essas necessidades.
      </p>
      <br />
      <h3 style={{ textAlign: "center" }}>ARTIGO 3: VIGÊNCIA E MODIFICAÇÕES</h3>

      <p>
        O Memorando será válido por cinco anos a partir da data de assinatura. O
        Memorando pode ser rescindido por qualquer uma das Partes mediante
        notificação por escrito com no mínimo 30 (trinta) dias de antecedência
        para a outra Parte.
      </p>
      <br />
      <p>
        Os termos deste Memorando somente poderão ser alterados ou modificados
        mediante adendo por escrito assinado por representantes autorizados
        pelas Partes ora mencionadas.
      </p>
      <br />
      <h3 style={{ textAlign: "center" }}>ARTIGO 4: COMPARTILHAMENTO DE DADOS E CONFIDENCIALIDADE</h3>

      <p>
        Salvo conforme disposto no parágrafo imediatamente abaixo, o DIL deverá
        (i) manter em sigilo qualquer informação marcada como confidencial
        (doravante, &quot;Informações Confidenciais&quot;); (ii) não divulgar, revelar ou
        comunicar Informações Confidenciais a nenhuma pessoa que não seja
        funcionária do IPLANFOR, exceto quando e conforme autorizado pelo
        IPLANFOR, e não utilizar as Informações Confidenciais para nenhuma
        finalidade que ndo esteja relacionada a este Memorando.
      </p>
      <br />
      <p>
        As limitações de divulgação definidas acima não se aplicam a Informações
        Confidenciais que (a) já estavam em posse do DIL antes da Data de
        Vigência do Memorando; (b) sejam ou venham a se tornar assunto de
        conhecimento público ou disponível publicamente, exceto por conta da
        violação deste Artigo pelo DIL; ou (c) sejam divulgadas pelo DIL
        mediante aprovação prévia e por escrito de um representante devidamente
        autorizado do IPLANFOR. Além disso, o DIL poderá divulgar Informações
        Confidenciais se essa divulgação for exigida por alguma lei, regra,
        regulamento ou processo judicial ou administrativo. O DIL notificará o
        IPLANFOR antes de qualquer divulgação exigida, se assim for permitido
        pela lei ou regulamento aplicável.
      </p>
      <br />
      <p>
        Considerando que o compartilhamento de dados é fundamental para que
        pesquisadores, cientistas e formuladores de políticas analisem e
        convertam esses dados em conhecimento e relatórios relevantes, as Partes
        celebrarão acordos de utilização e/ou compartilhamento de dados conforme
        as Partes concordarem mutuamente.
      </p>
      <br />
      <p>
        Segundo as políticas da UChicago sobre liberdade acadêmica e divulgação
        plena e livre de pesquisas e estudos, o DIL terá o direito de publicar
        ou divulgar publicamente materiais ou informações decorrentes e
        provenientes das atividades especificadas neste Memorando.
      </p>
      <br />
      <h3 style={{ textAlign: "center" }}>ARTIGO 5: USO DO NOME</h3>

      <p>
        A UChicago não utilizará o nome ou logotipo do IPLANFOR ou de nenhum
        funcionário do IPLANFOR em nenhum material publicitário, de propaganda
        ou comunicado à imprensa sem a aprovação prévia e por escrito do
        IPLANFOR.
      </p>
      <br />
      <p>
        Por sua vez, o IPLANFOR não utilizará o nome ou logotipo da Universidade
        de Chicago ou de nenhum de seus professores, funcionários e estudantes
        em nenhum tipo de publicidade, propaganda ou comunicado à imprensa sem a
        aprovação prévia e por escrito de um representante autorizado da
        UChicago.
      </p>
      <br />
      <h3 style={{ textAlign: "center" }}>ARTIGO 6: AUSÊNCIA DE DISCRIMINAÇÃO</h3>

      <p>
        As Partes concordam que ninguém terá sua participação excluída nos
        termos deste Memorando com base em questões de raça, religião, cor,
        sexo, idade, origem nacional ou descendência, informação genética,
        estado civil ou parental, orientação sexual, expressão e identidade de
        gênero, deficiência ou situação militar de veterano.
      </p>
      <br />
      <h3 style={{ textAlign: "center" }}>ARTIGO 7: CONFORMIDADE COM A LEI</h3>

      <p>
        As Partes cumprirão todas as leis e regulamentos aplicáveis em seus
        respectivos países ao desempenharem suas obrigações nos termos deste
        Memorando, incluindo as leis aplicáveis de combate ao suborno e
        corrupção, bem como as leis de controle de exportação.
      </p>
      <br />
      <h3 style={{ textAlign: "center" }}>ARTIGO 8: IDIOMA DE PREVALÊNCIA</h3>

      <p>
        Caso este documento seja firmado em dois idiomas, a versdo em inglés do
        presente Acordo representara o entendimento entre as Partes. Qualquer
        outra versão será fornecida apenas como tradução. Em caso de conflito
        entre as versdes, a versdo em inglés prevalecerá.
      </p>
      <br />
      <h3 style={{ textAlign: "center" }}>ACORDO</h3>

      <p>
        Quaisquer alterações nas funções e responsabilidades deverão ser
        previamente aprovadas por escrito por todas as Partes. As Partes
        desempenharão suas funções e responsabilidades com o devido cuidado,
        atuando de forma consistente com os padrões profissionais e aplicáveis
        para o setor, em conformidade com todas as leis aplicáveis e
        substancialmente segundo a descrição definida nesta Seção. Exceto no que
        diz respeito ao ARTIGO 4 (Compartilhamento de Dados e
        Confidencialidade), ARTIGO 5 (Uso do Nome), ARTIGO 6 (Ausência de
        Discriminação) e ARTIGO 7 (Conformidade com a Lei), este Memorando não
        tem força vinculante e serve apenas ao propósito de estabelecer uma base
        sobre a qual as Partes pretendem colaborar nas áreas de cooperação ora
        descritas.
      </p>
      <br />
      <p>
        E POR ESTAREM DE ACORDO, as Partes assinam este Memorando de
        Entendimento em 5 de Março, 2024.
      </p>
    </div>
  );
}
