import { useState } from "react";
import { FlatList } from "react-native";

import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import {
  Container,
  Form,
  HeaderList,
  CounterPlayers,
  ButtonRemove,
} from "./styles";

const Players = () => {
  const [teamsList, setTeamsList] = useState<string[]>([
    "time a",
    "time b",
    "time c",
    "time d",
    "time e",
    "time f",
    "time abc",
    "time g",
  ]);
  const [playersList, setPlayersList] = useState([
    "Sávio",
    "Silva",
    "Eduarda",
    "Joãozinho",
    "Paulo",
    "Ana",
    "José",
    "Laura",
  ]);
  const [teamSelected, setTeamSelected] = useState(teamsList[0]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subTitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          keyExtractor={(item: string) => item}
          data={teamsList}
          renderItem={({ item }: { item: string }) => (
            <Filter
              title={item}
              isActive={item === teamSelected}
              onPress={() => setTeamSelected(item)}
            />
          )}
          horizontal
          style={{ maxWidth: "90%" }}
        />
        <CounterPlayers>{teamsList.length}</CounterPlayers>
      </HeaderList>

      <FlatList
        keyExtractor={(item: string) => item}
        data={playersList}
        renderItem={({ item }: { item: string }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100, marginBottom: 12 },
          playersList.length === 0 && { flex: 1 },
        ]}
      />

      <ButtonRemove title="Remover turma" type="secondary" />
    </Container>
  );
};

export default Players;
