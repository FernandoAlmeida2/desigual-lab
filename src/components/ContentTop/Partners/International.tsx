import Link from "next/link";
import styles from "../contentTop.module.css";

export default function International() {
  return (
    <div className={styles.contentTop}>
      <h1>Parceiros internacionais</h1>
      <br />
      <Link href="https://harris.uchicago.edu/">
        <h2>The University of Chicago Harris School of Public Policy</h2>
      </Link>
      <br />
      <Link href="https://harris.uchicago.edu/">
        <h2>Development Innovation Lab</h2>
      </Link>
      <br />
      <h3>Michael Kremer</h3>
      <p>
        University Professor in Economics and the College and the Harris School
        of Public Policy;
        <br />
        Director of the Development Innovation Lab;Faculty Director, Development
        Economics Center at the University of Chicago
        <br />
        <br />
        At Chicago since 2020
        <br />
        <br />
        2019 Nobel Laureate
        <br />
        Member of the American Academy of Arts and Sciences, 2003.
        <br />
        Fellow of The Econometric Society, 2008.
        <br />
        Member of the National Academy of Sciences, 2020.
        <br />
        <br />
        Ph.D., Harvard University, 1992.<br />
        <a href="https://economics.uchicago.edu/directory/Michael-Kremer">
          https://economics.uchicago.edu/directory/Michael-Kremer
        </a>
      </p>
      <br />
      <h3>Benjamin Krause</h3>
      <p>
        Executive Director, Development Economics Center,
        <a href="https://bfi.uchicago.edu/scholar/benjamin-krause/">
          https://bfi.uchicago.edu/scholar/benjamin-krause/
        </a>
      </p>
      <br />
      <h3>Ryan Cooper</h3>
      <p>
        Director of Government Innovation at the University of Chicago at the
        Development Economic Center,
        <br />
        <a href="https://bfi.uchicago.edu/scholar/ryan-cooper/">
          https://bfi.uchicago.edu/scholar/ryan-cooper/
        </a>
      </p>
      <br /><br />
      <h3>SCHOLARS</h3>
      <br />
      <h3>Guthrie Gray-Lobe</h3>
      <p>
        Research Associate and Lead Researcher, Development Innovation Lab,
        <br />
        <a href="https://bfi.uchicago.edu/scholar/guthrie-gray-lobe/">
          https://bfi.uchicago.edu/scholar/guthrie-gray-lobe/
        </a>
      </p>
      <br />
      <h3>Henrique Rodrigues da Mota</h3>
      <p>
        PhD Student in Economics at the University of Chicago,
        <br />
        <a href="https://economics.uchicago.edu/directory/henrique-rodrigues-da-mota">
          https://economics.uchicago.edu/directory/henrique-rodrigues-da-mota
        </a>
      </p>
      <br />
      <h3>Alexandre Simoes Gomes Junior</h3>
      <p>
        Research Professional, Development Innovation Lab,
        <br />
        <a href="https://bfi.uchicago.edu/scholar/alexandre-simoes-gomes-junior/">
          https://bfi.uchicago.edu/scholar/alexandre-simoes-gomes-junior/
        </a>
      </p>
      <br />
      <h3>Matheus Proença</h3>
      <p>
        Predoctoral Research Professional, Development Innovation Lab,
        <br />
        <a href="https://bfi.uchicago.edu/scholar/matheus-hoch-de-proenca">
          https://bfi.uchicago.edu/scholar/matheus-hoch-de-proenca
        </a>
      </p>
    </div>
  );
}
