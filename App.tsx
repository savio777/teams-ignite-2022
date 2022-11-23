import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "@theme";
import Loading from "@components/Loading";
import Players from "@screens/Players";

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
        {!fontsLoaded ? <Loading /> : <Players />}

        <StatusBar style="light" backgroundColor="transparent" translucent />
      </View>
    </ThemeProvider>
  );
}
