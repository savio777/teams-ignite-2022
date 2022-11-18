import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Groups from "./src/screens/Groups";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Groups />
      <StatusBar style="auto" />
    </View>
  );
}
