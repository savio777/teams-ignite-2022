import { useState } from "react";

import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import { Container, Form, HeaderList, CounterPlayers, List } from "./styles";
import PlayerCard from "@components/PlayerCard";
import { FlatList } from "react-native";

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
        <List<any>
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
        />
        <CounterPlayers>{teamsList.length}</CounterPlayers>
      </HeaderList>

      <FlatList
        keyExtractor={(item) => item}
        data={playersList}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
      />
    </Container>
  );
};

export default Players;
