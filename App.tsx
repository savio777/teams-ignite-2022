import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components";

import theme from "@theme";
import Groups from "@screens/Groups";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Groups />
        <StatusBar style="light" backgroundColor={theme.colors.gray[600]} />
      </View>
    </ThemeProvider>
  );
}
