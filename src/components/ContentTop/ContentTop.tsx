import ContactUs from "../MenuOptions/ContactUs/ContactUs";
import Presentation from "./Presentation/Presentation";
import { Styles } from "./ContentTop.styles";
import InitialContent from "./InitialContent/InitialContent";
import Printed from "./Press/Printed";
import Assignments from "./Assignments/Assignments";
import Legislation from "./Legislation/Legislation";
import Address from "./Address/Address";
import Regulation from "./Regulation/Regulation";
import Organization from "./Organization/Organization";
import AboutUs from "./AboutUs/AboutUs";
import TechnicalSheet from "./TechnicalSheet/TechnicalSheet";
import Internal from "./Partners/Internal";
import External from "./Partners/External";
import International from "./Partners/International";

type Props = {
  currentTopic: string;
};

export default function ContentTop({ currentTopic }: Props) {
  function RenderMenuOption() {
    switch (currentTopic) {
      case "presentation":
        return <Presentation />;
      case "contact":
        return <ContactUs />;
      case "assignments":
        return <Assignments />;
      case "legislation":
        return <Legislation />;
      case "about-us":
        return <AboutUs />;
      case "initial":
        return <InitialContent />;
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
    <Styles.Container currentTopic={currentTopic}>
      {RenderMenuOption()}
    </Styles.Container>
  );
}
