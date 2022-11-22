import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    font-size: ${theme.fontSize.SM}px;
    color: ${theme.colors.gray[300]};
  `}
`;
