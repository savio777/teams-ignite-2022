import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.fontSize.XL}px;
    font-family: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`;

export const SubTitle = styled(Title)`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.MD}px;
    font-family: ${theme.font.regular};
    color: ${theme.colors.gray[300]};
  `}
`;
