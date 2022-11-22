import { TouchableOpacityProps } from "react-native";
import { Container, Title, ButtonTypeStyleProps } from "./styles";

type Props = {
  title: string;
  type?: ButtonTypeStyleProps;
} & TouchableOpacityProps;

const Button = ({ title, type = "primary", ...restProps }: Props) => (
  <Container type={type} {...restProps}>
    <Title>{title}</Title>
  </Container>
);

export default Button;
