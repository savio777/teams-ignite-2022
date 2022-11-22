import styled from "styled-components/native";
import { UsersThree, IconProps } from "phosphor-react-native";
import Button from "@components/Button";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(
  ({ theme }) =>
    ({
      size: 56,
      color: theme.colors.green.dark,
    } as IconProps)
)`
  align-self: center;
`;

export const ButtonNewGroup = styled(Button)`
  margin-top: 20px;
`;
