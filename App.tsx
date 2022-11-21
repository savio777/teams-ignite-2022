import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "@theme";
import Groups from "@screens/Groups";
import Loading from "@components/Loading";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        {!fontsLoaded ? <Loading /> : <Groups />}

        <StatusBar style="light" backgroundColor="transparent" translucent />
      </View>
    </ThemeProvider>
  );
}
