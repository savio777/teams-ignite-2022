import Logo from "@assets/logo.png";
import * as S from "./styles";

const Groups = () => (
  <S.Container>
    <S.ImageLogo source={Logo} style={{ width: 100, height: 120 }} />
    <S.Title>Groups</S.Title>
  </S.Container>
);

export default Groups;
