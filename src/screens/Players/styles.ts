import { FlatList, FlatListProps } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  padding: 24px;
`;

export const Form = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const CounterPlayers = styled.Text`
  margin-left: auto;

  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-family: ${theme.font.bold};
    font-size: ${theme.fontSize.SM}px;
  `}
`;

export const List = styled(FlatList)`
  max-width: 90%;
`;
