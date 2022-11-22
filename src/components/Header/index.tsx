import LogoImage from "@assets/logo.png";
import * as S from "./styles";

type Props = {
  showBackButton?: boolean;
};

const Header = ({ showBackButton = false }: Props) => (
  <S.Container>
    {showBackButton && (
      <S.BackButton>
        <S.BackIcon />
      </S.BackButton>
    )}

    <S.Logo source={LogoImage} />
  </S.Container>
);

export default Header;
