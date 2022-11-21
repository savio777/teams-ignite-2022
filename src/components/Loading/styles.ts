import { ActivityIndicatorProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(
  ({ theme }) =>
    ({
      color: theme.colors.green.dark,
      size: 26,
    } as ActivityIndicatorProps)
)``;
