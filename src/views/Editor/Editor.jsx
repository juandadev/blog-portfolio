import EditorHeader from "./subcomponents/EditorHeader";
import EditorBox from "./subcomponents/EditorBox";
import s from "./Editor.module.scss";
import { Container } from "react-bootstrap";

export default function Editor() {
  return (
    <>
      <EditorHeader s={s} />
      <Container className={s.container}>
        <EditorBox s={s} />
      </Container>
    </>
  );
}
