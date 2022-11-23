import { TouchableOpacityProps } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
} & TouchableOpacityProps;

const ButtonIcon = ({ icon, type = "primary", ...props }: Props) => (
  <Container type={type} {...props}>
    <Icon name={icon} type={type} />
  </Container>
);

export default ButtonIcon;
