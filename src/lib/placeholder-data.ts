import { IndicatorGroup } from "./definitions";

export const indicatorsList: IndicatorGroup[] = [
  {
    id: 1,
    subject: "Saúde",
    indicators: [
      {
        indicatorId: 1,
        title: "Gravidez na Adolescência",
        subtitle: "Percentual do total de nascidos vivos de mães adolescentes dividido pelo total de nascidos vivos.",
        mapPath: "gRPQe/5/",
        histogramPath: "U7Gc0/1/",
        tablePath: "HDevv/1/",
        odsPath: "SDG-3.svg",
        formula: "Média trienal (2021 a 2023) do total de nascidos vivos de mães adolescentes ÷ média trienal (2021 a 2023) do número de nascidos vivos x 100.",
        remarks: "*Consideram-se adolescentes para este cálculo mulheres com até 19 anos",
        year: 2023,
        source: "Secretaria Municipal de Saúde - Tabnet (SINASC)",
        bestDistrict: "Pirambu",
        bestValue: 19,
        worseDistrict: "De Lourdes",
        worseValue: 0,
        median: 9.9342,
        mean: 9.865351695,
        asymmetry: -10.55933301,
      },
      {
        indicatorId: 2,
        title: "Idade Média ao Morrer",
        subtitle: "Média da idade das pessoas que morreram, por bairro",
        mapPath: "5Le9S/4/",
        histogramPath: "ytx1V/1/",
        tablePath: "pmt6E/1/",
        odsPath: "SDG-3.svg",
        formula: "Média da idade (em anos) das pessoas que morreram",
        remarks: "",
        year: 2021,
        source: "Secretaria Municipal de Saúde - Tabnet (SIM)",
        bestDistrict: "Parreão",
        bestValue: 77.1,
        worseDistrict: "Novo Mondubim",
        worseValue: 56,
        median: 67.2,
        mean: 67.1,
        asymmetry: 1.06,
      },
      {
        indicatorId: 3,
        title: "Mortalidade Materna",
        subtitle:
          "Óbitos por 1000 nascidos vivos",
        mapPath: "89Z34/6/",
        histogramPath: "sktGf/1/",
        tablePath: "Fr6S4/1/",
        odsPath: "SDG-3.svg",
        formula:
          "Total de óbitos por causas maternas dividido pelo total de nascidos vivos multiplicado por 1000",
        remarks:
          'Para efeitos do cálculo foram utilizados os totais anuais.Número de óbitos considerados como maternos, segundo o local de residência da falecida. Foram selecionados os seguintes óbitos femininos, independentemente da idade, causados por: 1. Afecções do Capítulo XV da CID-10 Gravidez, Parto e Puerpério, códigos O00-O99, com exceção das mortes fora do período do puerpério de 42 dias',
        year: 2023,
        source: "Secretaria Municipal de Saúde - Tabnet (SIM)",
        bestDistrict: "Parque Dois Irmãos",
        bestValue: 5.87,
        worseDistrict: 114,
        worseValue: 0,
        median: 0,
        mean: 0.09,
        asymmetry: 100,
      },
      {
        indicatorId: 4,
        title: "Mortalidade Infantil",
        subtitle: "Taxa de mortalidade em menores de 1 ano",
        mapPath: "poVm6/3/",
        histogramPath: "J3eQK/1/",
        tablePath: "kB19N/3/",
        odsPath: "SDG-3.svg",
        formula:
          "Total de óbitos de menores de 1 ano dividido pelo  total de nascidos vivos multiplicado por 1000 nascidos vivos",
        remarks: "Para efeitos do cálculo foram utilizados os totais anuais",
        year: 2023,
        source: "Secretaria Municipal de Saúde - Tabnet (SIM)",
        bestDistrict: "José Bonifácio",
        bestValue: 54.5,
        worseDistrict: 23,
        worseValue: 0,
        median: 11.9048,
        mean: 12.6273336,
        asymmetry: 4.8987,
      },
      {
        indicatorId: 5,
        title: "Mortalidade Neonatal",
        subtitle: "Taxa de mortalidade em menores de 28 dias",
        mapPath: "hAxRK/3/",
        histogramPath: "/cuD94/2/",
        tablePath: "GIzM1/1/",
        odsPath: "SDG-3.svg",
        formula:
          "Total de óbitos de menores de 28 dias dividido pelo  total de nascidos vivos multiplicado por 1000 nascidos vivos",
        remarks: "Para efeitos do cálculo foram utilizados os totais anuais",
        year: 2023,
        source: "Secretaria Municipal de Saúde - Tabnet (SIM)",
        bestDistrict: "José Bonifácio",
        bestValue: 54.5,
        worseDistrict: 33,
        worseValue: 0,
        median: 7.1429,
        mean: 9.025931092,
        asymmetry: 28.19640062,
      },
      {
        indicatorId: 6,
        title: "Mortalidade por Doenças Crônicas Não Transmissíveis",
        subtitle:
          "Número de óbitos por DCNT dividido pela população residente multiplicado por 100.000",
        mapPath: "qdXjj/2/",
        histogramPath: "x1GiS/1/",
        tablePath: "CeQC1/1/",
        odsPath: "SDG-3.svg",
        formula:
          "Número de óbitos (entre 30 e 69 anos) por DCNT registrados nos códigos CID-10 – I00-I99; C00-C97; J30-J98, exceto J36; E10-E14 – em determinado ano e local dividida pela população residente multiplicado por 100.000",
        remarks:
          "Para efeitos do cálculo foram consideradas doenças do aparelho circulatório, tumores malignos, diabetes mellitus e doenças crônicas respiratórias.",
        year: 2023,
        source: "Secretaria Municipal de Saúde - Tabnet (SIM)",
        bestDistrict: "Pedras",
        bestValue: 505.05,
        worseDistrict: "Aracapé",
        worseValue: 33.31,
        median: 133,
        mean: 145.99,
        asymmetry: 25.12,
      },
    ],
  },
  {
    id: 2,
    subject: "Educação",
    indicators: [
      {
        indicatorId: 7,
        title: "Matrículas em Creche",
        subtitle: "Proporção de matrículas em creche em relação ao total de matrículas",
        mapPath: "4yaTO/3/",
        histogramPath: "12Mlx/1/",
        tablePath: "T0c1R/1/",
        odsPath: "SDG-4.svg",
        formula:
          "Número de matrículas em creche dividido pelo total de matrículas e multiplicado por 100",
        remarks:
          " ",
        year: 2022,
        source: "Censo Escolar - INEP",
        bestDistrict: "Prefeito José Walter",
        bestValue: 3.3,
        worseDistrict: 9,
        worseValue: 0,
        median: 0.67,
        mean: 0.86,
        asymmetry: 37.5,
      },
      {
        indicatorId: 8,
        title: "Matrículas no Ensino Básico",
        subtitle: "Proporção de matrículas no ensino básico em relação ao total de matrículas",
        mapPath: "84f2u/1/",
        histogramPath: "2h6ag/1/",
        tablePath: "bXmyo/1/",
        odsPath: "SDG-4.svg",
        formula:
          "Número de matrículas no ensino básico dividido pelo total de matrículas multiplicado por 100",
        remarks:
          " ",
        year: 2022,
        source: "Censo Escolar - INEP",
        bestDistrict: "Messejana",
        bestValue: 4.46,
        worseDistrict: "Amadeu Furtado",
        worseValue: 0.02,
        median: 0.65,
        mean: 0.86,
        asymmetry: 40.78,
      },
    ],
  },
  {
    id: 3,
    subject: "Saneamento Básico",
    indicators: [
      {
        indicatorId: 9,
        title: "Rede de Água",
        subtitle: "Acesso a rede de água percapita",
        mapPath: "j8zVQ/1/",
        histogramPath: "4O9RD/1/",
        tablePath: "NhBtW/1/",
        odsPath: "SDG-6.svg",
        formula:
          "Extensão da rede de água (m) dividida pela população do bairro",
        remarks:
          " ",
        year: 2019,
        source: "SNIS",
        bestDistrict: "Pedras",
        bestValue: 15.1,
        worseDistrict: "Manoel Sátiro",
        worseValue: 0.67,
        median: 1.62,
        mean: 1.99,
        asymmetry: 43.54,
      },
      {
        indicatorId: 10,
        title: "Rede de Esgoto",
        subtitle: "Acesso a rede de esgoto percapita",
        mapPath: "RyjxW/1/",
        histogramPath: "MYrrb/1/",
        tablePath: "9rLM9/1/",
        odsPath: "SDG-6.svg",
        formula:
          "Extensão da rede de esgoto (m) dividida pela população do bairro",
        remarks:
          " ",
        year: 2019,
        source: "SNIS",
        bestDistrict: "Manuel Dias Branco",
        bestValue: 5.49,
        worseDistrict: 2,
        worseValue: 0.01,
        median: 1.13,
        mean: 1.19,
        asymmetry: -5.33,
      },
      {
        indicatorId: 11,
        title: "Equipamentos de Coleta Seletiva (Ecopontos)",
        subtitle: " ",
        mapPath: "cZp3c/1/",
        histogramPath: "EdQxv/2/",
        tablePath: "mVPyd/1/",
        odsPath: "SDG-12.svg",
        formula:
          "Número de ecopontos no bairro dividido pelo total de ecopontos na cidade multiplicado por 100",
        remarks:
          " ",
        year: 2019,
        source: "Secretaria Municipal da Conservação e Serviços Públicos",
        bestDistrict: 7,
        bestValue: 3.41,
        worseDistrict: 59,
        worseValue: 0,
        median: 1.14,
        mean: 0.83,
        asymmetry: 0,
      },
      {
        indicatorId: 12,
        title: "Equipamentos de Coleta Seletiva Percapita (Ecopontos)",
        subtitle: "Ecopontos por 100.000 habitantes",
        mapPath: "jCn7c/1/",
        histogramPath: "xa56w/2/",
        tablePath: "6Tea0/1/",
        odsPath: "SDG-12.svg",
        formula:
          "Número de ecopontos no bairro dividido pela população do bairro multiplicado por 100.000 habitantes",
        remarks:
          " ",
        year: 2019,
        source: "Secretaria Municipal da Conservação e Serviços Públicos",
        bestDistrict: "Pedras",
        bestValue: 46.9,
        worseDistrict: 59,
        worseValue: 0,
        median: 1.83,
        mean: 3.52,
        asymmetry: 57.68,
      },
    ],
  },
  {
    id: 4,
    subject: "Meio Ambiente",
    indicators: [
      {
        indicatorId: 13,
        title: "Área verde por Bairro",
        subtitle: "Área verde por Bairro",
        mapPath: "0f2EQ/1/",
        histogramPath: "dzCiO/1/",
        tablePath: "FSql7/1/",
        odsPath: "SDG-15.svg",
        formula:
          "Extensão da área (m²) dividida pela área do bairro",
        remarks:
          " ",
        year: 2021,
        source: "Agência Espacial Europeia (ESA)",
        bestDistrict: "Salinas",
        bestValue: 47.6,
        worseDistrict: "Pirambu",
        worseValue: 0,
        median: 8.15,
        mean: 12.05,
        asymmetry: 49.3,
      },
      {
        indicatorId: 14,
        title: "Área verde por Habitante",
        subtitle: "Índice de Áreas Verdes por Bairro",
        mapPath: "KKya7/1/",
        histogramPath: "0rIhg/1/",
        tablePath: "Y0jfC/1/",
        odsPath: "SDG-15.svg",
        formula:
          "Extensão da área verde (m²) dividida pela população do bairro",
        remarks:
          " ",
        year: 2021,
        source: "Agência Espacial Europeia (ESA)",
        bestDistrict: "Pedras",
        bestValue: 1589.2,
        worseDistrict: "Pirambu",
        worseValue: 0,
        median: 7.47,
        mean: 54,
        asymmetry: 85.46,
      },
    ],
  },
  {
    id: 5,
    subject: "Habitação",
    indicators: [
      {
        indicatorId: 15,
        title: "Favelas e Comunidades Urbanas",
        subtitle: "Proporção (%) estimada de áreas em favelas em relação à área do bairro",
        mapPath: "fJpHM/1/",
        histogramPath: "tQDx6/1/",
        tablePath: "xiYHu/1/",
        odsPath: "SDG-11.svg",
        formula:
          "Área da comunidade dividido pela área do bairro e multiplicado por 100",
        remarks:
          " ",
        year: 2016,
        source: "Plano Fortaleza 2040 e PLHIS-For",
        bestDistrict: "Pirambu",
        bestValue: 97.5,
        worseDistrict: 8,
        worseValue: 0,
        median: 5.32,
        mean: 10.67,
        asymmetry: 61.78,
      },
    ],
  },
  {
    id: 6,
    subject: "Esporte e Lazer",
    indicators: [
      {
        indicatorId: 16,
        title: "Acesso a Praças",
        subtitle: "Densidade urbana por área de praça no bairro",
        mapPath: "3Bo2a/1/",
        histogramPath: "RPdRL/1/",
        tablePath: "m7sVG/2/",
        odsPath: "SDG-11.svg",
        formula:
          "População dividida por área de praça (m²) no bairro",
        remarks:
          " ",
        year: 2019,
        source: "URBIFOR",
        bestDistrict: "Conjunto Ceará I",
        bestValue: 5.05,
        worseDistrict: 15,
        worseValue: 0,
        median: 0.41,
        mean: 0.69,
        asymmetry: 45.79,
      },
    ],
  },
  {
    id: 7,
    subject: "Mobilidade Urbana",
    indicators: [
      {
        indicatorId: 17,
        title: "Sinistros de Trânsito",
        subtitle: "Quantidade de sinistros por bairro",
        mapPath: "v73oI/1/",
        histogramPath: "W6tB6/1/",
        tablePath: "MiSGx/1/",
        odsPath: "SDG-3.svg",
        formula:
          "Número de sinistros",
        remarks:
          " ",
        year: 2020,
        source: "Plataforma Vida - AMC",
        bestDistrict: "Centro",
        bestValue: 462,
        worseDistrict: "De Lourdes",
        worseValue: 2,
        median: 61,
        mean: 75.8,
        asymmetry: 42.62,
      },
      {
        indicatorId: 18,
        title: "Óbitos de Trânsito",
        subtitle: "Proporção do número de óbitos em relação à população do bairro",
        mapPath: "pKakS/1/",
        histogramPath: "GhSHn/1/",
        tablePath: "4MBrt/1/",
        odsPath: "SDG-3.svg",
        formula:
          "Número de mortes no trânsito dividido pela população",
        remarks:
          " ",
        year: 2021,
        source: "Secretaria Municipal de Saúde - Tabnet (SIM)",
        bestDistrict: "Curió",
        bestValue: 33.6,
        worseDistrict: 51,
        worseValue: 0,
        median: 33.6,
        mean: 43.6,
        asymmetry: 42.82,
      },
      {
        indicatorId: 19,
        title: "Infraestrutura Cicloviária",
        subtitle: "Extensão da malha cicloviária por habitante",
        mapPath: "91WZw/1/",
        histogramPath: "ZUcOH/1/",
        tablePath: "dCOiF/1/",
        odsPath: "SDG-3.svg",
        formula:
          "Extensão da malha cicloviária percapita",
        remarks:
          " ",
        year: 2023,
        source: "AMC",
        bestDistrict: "Sabiaguaba",
        bestValue: 3.9,
        worseDistrict: 8,
        worseValue: 0,
        median: 0.43,
        mean: 0.57,
        asymmetry: 39.01,
      },
      {
        indicatorId: 20,
        title: "Pontos de Ônibus Percapita",
        subtitle: "Pontos de ônibus percapita por 10.000 habitantes",
        mapPath: "JNh2n/1/",
        histogramPath: "2k4ZG/1/",
        tablePath: "qRGQ6/1/",
        odsPath: "SDG-11.svg",
        formula:
          "Pontos de ônibus dividido pela população multiplicado por 10.000 habitantes",
        remarks:
          " ",
        year: 2022,
        source: "Etufor",
        bestDistrict: "Pedras",
        bestValue: 206.2,
        worseDistrict: "Couto Fernandes",
        worseValue: 0,
        median: 17.8,
        mean: 21.06,
        asymmetry: 14.61,
      },
      {
        indicatorId: 21,
        title: "Pontos de Ônibus por Área",
        subtitle: "Pontos de ônibus por área do bairro",
        mapPath: "Sxhdn/1/",
        histogramPath: "L1z4C/1/",
        tablePath: "3U78V/1/",
        odsPath: "SDG-11.svg",
        formula:
          "Pontos de ônibus dividido pela área do bairro (km²)",
        remarks:
          " ",
        year: 2022,
        source: "Etufor",
        bestDistrict: "Panamericano",
        bestValue: 42.95,
        worseDistrict: "Couto Fernandes",
        worseValue: 0,
        median: 17.9,
        mean: 18.2,
        asymmetry: -0.44,
      },
    ],
  },
  {
    id: 8,
    subject: "População",
    indicators: [
      {
        indicatorId: 22,
        title: "População",
        subtitle: "Total de residentes por bairro",
        mapPath: "74grH/1/",
        histogramPath: "Efdv3/1/",
        tablePath: "2YkB7/1/",
        odsPath: "",
        formula:
          "Quantidade de residentes",
        remarks:
          "Projeção da população por bairro para o ano de 2022, com base no Censo demográfico do IBGE de 2010 e 2022",
        year: 2022,
        source: "Iplanfor",
        bestDistrict: "Barra do Ceará",
        bestValue: 73818,
        worseDistrict: "Manuel Dias Branco",
        worseValue: 1649,
        median: 16012,
        mean: 20071.71,
        asymmetry: 43.29,
      },
    ],
  },
];

export const subjectsList = [
  "Saúde",
  "População",
  "Habitação",
  "Educação",
  "Esporte e lazer",
  "Mobilidade urbana",
  "Segurança",
  "Meio ambiente",
  "Saneamento básico"
];

export const InitialMenu = {
  desigualLab: false,
  team: false,
  who: false,
  partners: false,
  assignments: false,
  projects: false,
  publications: false,
  schedule: false,
  press: false,
  legislation: false
};


export type NewsCard = {
  title: string;
  mediaType: string;
  imagePath: string;
  source: string;
  date: string;
  filePath: string;
}

export const dataNews: NewsCard[] = [
  {
    title: "Universidade de Chicago e PMF: inovação e planejamento em alta no Iplanfor",
    mediaType: "IMPRESSA",
    imagePath: "news1.jpeg",
    source: "INSIDER (Fortaleza, Brasil)",
    date: "1 de Setembro de 2023",
    filePath: "news1.pdf"
  },
  {
    title: "A efetividade de políticas públicas contra a desigualdade",
    mediaType: "IMPRESSA",
    imagePath: "news2.jpeg",
    source: "Jornal O Povo (Fortaleza, Brasil)",
    date: "3 de Setembro de 2023",
    filePath: "news2.pdf"
  },
  {
    title: "A conjugação da esperança",
    mediaType: "IMPRESSA",
    imagePath: "news3.jpeg",
    source: "Jornal O Povo (Fortaleza, Brasil)",
    date: "5 de Junho de 2022",
    filePath: "news3.pdf"
  },
  {
    title: "Pesquisador da Universidade de Chicago chega a Fortaleza para reuniões no Iplanfor",
    mediaType: "IMPRESSA",
    imagePath: "news4.jpeg",
    source: "O Otimista (Fortaleza, Brasil)",
    date: "31 de Agosto de 2023",
    filePath: "news4.pdf"
  },
  {
    title: "Desigual Lab é lançado com palestra do Prêmio Nobel Michael Kremer",
    mediaType: "IMPRESSA",
    imagePath: "OpiniãoCE.png",
    source: "OpiniãoCE (Fortaleza, Brasil)",
    date: "06 de Março de 2024",
    filePath: "OpiniãoCE.jpeg"
  },
  {
    title: "Desigual Lab: com 121 bairros, Fortaleza dez deles sem favela",
    mediaType: "IMPRESSA",
    imagePath: "DesigualLab_OPovo.png",
    source: "Jornal O Povo (Fortaleza, Brasil)",
    date: "06 de Março de 2024",
    filePath: "DesigualLab_OPovo.pdf"
  }
]