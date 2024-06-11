import styles from "../contentTop.module.css";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";

export default function Address() {
  return (
    <div className={styles.contentTop}>
      <h1>Endereço</h1>
      <p>
        R. Vinte e Cinco de Março, 268 - Centro, Fortaleza - CE, 60060-120{" "}
        <Link href={"https://maps.app.goo.gl/JR8JoYnHfE5VKfhs9"}>
          <SiGooglemaps className={styles.mapIcon} />
        </Link>
      </p>
    </div>
  );
}
