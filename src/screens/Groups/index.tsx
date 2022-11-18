import { Image, View } from "react-native";

import Logo from "@assets/logo.png";

const Groups = () => (
  <View style={{ flex: 1 }}>
    <Image source={Logo} style={{ width: 100, height: 120 }} />
  </View>
);

export default Groups;
