import { TextInput, TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput).attrs(
  ({ theme }) =>
    ({ placeholderTextColor: theme.colors.gray[300] } as TextInputProps)
)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  padding: 16px;
  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[700]};
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.MD}px;
    font-family: ${theme.font.regular};
  `}
`;
