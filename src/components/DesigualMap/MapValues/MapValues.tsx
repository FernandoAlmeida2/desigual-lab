import { IFRAME_BASE_URL } from "@/app/constants/urls";
import { Styles } from "./mapValues.style";
import ValueCard from "./ValueCard";

type Props = {
  bestDistrict: string | number;
  bestValue: number;
  worseDistrict: string | number;
  worseValue: number;
  mean: number;
  asymmetry: number;
  histogramPath: string;
};

export default function MapValues({
  bestDistrict,
  bestValue,
  worseDistrict,
  worseValue,
  mean,
  asymmetry,
  histogramPath,
}: Props) {
  return (
    <Styles.Container>
      <Styles.HistogramBox>
        <iframe
          id="iframe-mapa"
          src={`${IFRAME_BASE_URL}/${histogramPath}`}
          width="100%"
          height="100%"
          style={{
            padding: "1vw",
          }}
        ></iframe>
      </Styles.HistogramBox>

      <ValueCard
        value={`${worseValue.toLocaleString(
          "pt-BR"
        )}-${bestValue.toLocaleString("pt-BR")}`}
        description="MENOR-MAIOR VALOR"
      />
      <ValueCard value={mean.toLocaleString("pt-BR")} description="MÉDIA" />
      <ValueCard
        value={asymmetry.toLocaleString("pt-BR")}
        description="ÍNDICE DE DESIGUALDADE"
      />
    </Styles.Container>
  );
}
