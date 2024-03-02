import ContactUs from "../MenuOptions/ContactUs/ContactUs";
import Presentation from "./Presentation/Presentation";
import { Styles } from "./ContentTop.styles";
import InitialContent from "./InitialContent/InitialContent";
import Draw from "./Assignments/Draw";
import Evaluate from "./Assignments/Evaluate";
import Accelerate from "./Assignments/Accelerate";
import Printed from "./Press/Printed";

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
      case "projects":
        return <div>Projetos</div>;
      case "drawing":
        return <Draw />;
      case "evaluate":
        return <Evaluate />;
      case "accelerate":
        return <Accelerate />;
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
