import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary";

type Props = { type: ButtonTypeStyleProps };

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  align-items: center;
  justify-content: center;

  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.colors.green.dark : theme.colors.red.dark};
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    font-size: ${theme.fontSize.MD}px;
    color: ${theme.colors.white};
  `}
`;
