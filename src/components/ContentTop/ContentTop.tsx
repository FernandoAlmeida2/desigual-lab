import ContactUs from "../MenuOptions/ContactUs/ContactUs";
import Presentation from "./Presentation/Presentation";
import styles from "./contentTop.module.css";
import InitialContent from "./InitialContent/InitialContent";
import Printed from "./Press/Printed";
import Assignments from "./Assignments/Assignments";
import Address from "./Address/Address";
import Regulation from "./Regulation/Regulation";
import Organization from "./Organization/Organization";
import AboutUs from "./AboutUs/AboutUs";
import TechnicalSheet from "./TechnicalSheet/TechnicalSheet";
import Internal from "./Partners/Internal";
import External from "./Partners/External";
import International from "./Partners/International";
import Decree from "./Legislation/Decree";
import Memo from "./Legislation/Memo";

type Props = {
  currentTopic: string;
};

export default function ContentTop({ currentTopic }: Props) {
  function RenderMenuOption() {
    switch (currentTopic) {
      case "initial":
        return <InitialContent />;
      case "presentation":
        return <Presentation />;
      case "contact":
        return <ContactUs />;
      case "assignments":
        return <Assignments />;
      case "decree":
        return <Decree />;
      case "memo":
        return <Memo />;
      case "about-us":
        return <AboutUs />;
      case "press":
        return <Printed />;
      case "address":
        return <Address />;
      case "tech-sheet":
        return <TechnicalSheet />;
      case "regulation":
        return <Regulation />;
      case "organization":
        return <Organization />;
      case "internal":
        return <Internal />;
      case "external":
        return <External />;
      case "international":
        return <International />;
      default:
        return <></>;
    }
  }

  return (
    <div
      className={`${styles.container} ${
        currentTopic === "initial" ? styles.layoutInitial : styles.layoutFinal
      }`}
    >
      {RenderMenuOption()}
    </div>
  );
}
