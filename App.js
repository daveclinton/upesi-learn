import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style={{ width: 60, height: 50 }}
      />
      <Text
        style={{
          fontSize: 32,
          marginTop: 12,
          fontWeight: 600,
          letterSpacing: -0.3,
        }}
      >
        E-Learn
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
