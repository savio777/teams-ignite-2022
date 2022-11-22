import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.XL}px;
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.MD}px;
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.gray[300]};
`;
