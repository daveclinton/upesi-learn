import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import SplashScreen from "../components/SplashScreen";
import { Link } from "expo-router";

export default function Page() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  return (
    <View style={isLoading ? styles.container : styles.welcomeContainer}>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Image
            source={require("../assets/bg.png")}
            style={styles.bgImage}
          ></Image>
          <View style={styles.footer}>
            <Text style={styles.welcomeHeader}>
              Finding the {``}
              <Text style={{ color: "#FFA800" }}>
                Perfect Online Course
              </Text>{" "}
              for You
            </Text>
            <Text style={styles.lowerHeader}>
              App to search and discover the most suitable place for you to
              stay.
            </Text>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Let's Get Started</Text>
            </Pressable>
            <View style={styles.signInPrompt}>
              <Text style={styles.signInText}>Already have an account?</Text>
              <Link style={styles.signInLInk} href="/signin">
                Sign In
              </Link>
            </View>
          </View>
        </>
      )}
      <Image
        source={require("../assets/ellipse.png")}
        style={styles.ellipse}
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  bgImage: {
    marginTop: 61,
  },
  footer: {
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 1000,
    bottom: 0,
    height: "47%",
    width: "100%",
    alignItems: "center",
    paddingTop: 60,
  },
  welcomeHeader: {
    fontSize: 27,
    textAlign: "center",
    width: 313,
    fontWeight: "600",
  },
  lowerHeader: {
    textAlign: "center",
    fontSize: 14,
    width: 327,
    marginTop: 24,
    color: "#797979",
  },
  button: {
    backgroundColor: "#0961F5",
    width: 327,
    borderRadius: 78,
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  signInPrompt: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    fontSize: 16,
    fontWeight: "500",
    gap: 4,
  },
  signInText: {
    color: "#242424",
  },
  signInLInk: {
    color: "#0961F5",
  },
  ellipse: {
    position: "absolute",
    marginTop: 170,
  },
});
