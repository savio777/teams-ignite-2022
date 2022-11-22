import { CaretLeft, IconProps } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(
  ({ theme }) =>
    ({
      size: 36,
      color: theme.colors.white,
    } as IconProps)
)``;
