import ButtonIcon from "@components/ButtonIcon";
import { Container, Icon, Title } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

const PlayerCard = ({ name, onRemove }: Props) => (
  <Container>
    <Icon name="person" />
    <Title>{name}</Title>
    <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
  </Container>
);

export default PlayerCard;
