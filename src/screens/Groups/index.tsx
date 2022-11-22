import { useState } from "react";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import Highlight from "@components/Highlight";

import * as S from "./styles";
import { FlatList } from "react-native";
import ListEmpty from "@components/ListEmpty";

const Groups = () => {
  const [groups, setGroups] = useState<string[]>([
    "Galera da Rocket",
    "Amigos",
  ]);

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subTitle="jogue com a sua turma" />

      <FlatList
        keyExtractor={(value) => value}
        data={groups}
        renderItem={({ item }) => <GroupCard title={item} onPress={() => {}} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </S.Container>
  );
};
export default Groups;
