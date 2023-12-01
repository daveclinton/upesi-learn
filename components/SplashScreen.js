import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Animated, Text } from "react-native";

const SplashScreen = () => {
  const imageScale = new Animated.Value(0.1);
  Animated.timing(imageScale, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/logo.png")}
        style={[styles.image, { transform: [{ scale: imageScale }] }]}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default SplashScreen;
