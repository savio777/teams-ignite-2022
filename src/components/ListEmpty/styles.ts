import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.SM}px;
  color: ${({ theme }) => theme.colors.gray[300]};
`;
