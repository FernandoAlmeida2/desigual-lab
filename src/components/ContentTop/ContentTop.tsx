import ContactUs from "../MenuOptions/ContactUs/ContactUs";
import Presentation from "./Presentation/Presentation";
import { Styles } from "./ContentTop.styles";
import InitialContent from "./InitialContent/InitialContent";
import Printed from "./Press/Printed";
import Assignments from "./Assignments/Assignments";
import Legislation from "./Legislation/Legislation";

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
      case "projects":
        return <div>Projetos</div>;
      case "initial":
        return <InitialContent />;
      case "press":
        return <Printed />;
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
