import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import Highlight from "@components/Highlight";

import * as S from "./styles";

const Groups = () => (
  <S.Container>
    <Header />
    <Highlight title="Turmas" subTitle="jogue com a sua turma" />

    <GroupCard title="Nome da turma" onPress={() => {}} />
  </S.Container>
);

export default Groups;
