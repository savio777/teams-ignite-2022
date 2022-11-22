import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = {
  title: string;
} & TouchableOpacityProps;

const GroupCard = ({ title, ...restProps }: Props) => (
  <Container {...restProps}>
    <Icon />
    <Title>{title}</Title>
  </Container>
);

export default GroupCard;
