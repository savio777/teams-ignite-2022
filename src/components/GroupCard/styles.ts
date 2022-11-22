import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { UsersThree, IconProps } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.gray[500]};
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 90px;
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-size: ${theme.fontSize.MD}px;
    font-family: ${theme.font.regular};
  `}
`;

export const Icon = styled(UsersThree).attrs(
  ({ theme }) =>
    ({
      size: 32,
      color: theme.colors.green.dark,
      weight: "fill",
    } as IconProps)
)`
  margin-right: 20px;
`;
