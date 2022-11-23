import { MaterialIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[500]};
  width: 100%;
  flex-direction: row;
  align-items: center;

  height: 56px;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.fontSize.MD}px;
    color: ${theme.colors.gray[200]};
    font-family: ${theme.font.regular};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray[200],
}))`
  margin: 0 4px 0 16px;
`;
