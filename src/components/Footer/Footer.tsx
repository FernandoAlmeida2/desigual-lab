import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <img
        src="/images/logos/logo_partners.svg"
        alt="logos  de parceiros"
        style={{width: "90vw", height: "10.6vw", objectFit: "cover"}}
      />
    </footer>
  );
}