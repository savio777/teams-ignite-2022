import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import { Container, Icon, Content, ButtonNewGroup } from "./styles";

const NewGroup = () => (
  <Container>
    <Header showBackButton />

    <Content>
      <Icon />
      <Highlight
        title="Nova turma"
        subTitle="crie a turma para adicionar as pessoas"
      />

      <Input placeholder="Nome da turma" />
      <ButtonNewGroup title="Criar" />
    </Content>
  </Container>
);

export default NewGroup;
