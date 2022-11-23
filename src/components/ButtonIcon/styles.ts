import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export type ButtonIconTypeStyleProps = "primary" | "secondary";

type Props = { type: ButtonIconTypeStyleProps };

export const Container = styled(TouchableOpacity)<Props>`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "primary" ? theme.colors.green.dark : theme.colors.red.dark,
}))``;
