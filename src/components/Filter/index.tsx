import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

const Filter = ({ title, isActive = false, ...restProps }: Props) => (
  <Container isActive={isActive} {...restProps}>
    <Title>{title}</Title>
  </Container>
);

export default Filter;
