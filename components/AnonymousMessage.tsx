import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const AnonymousMessage = () => {
  return (
    <View style={styles.anonymousContainer}>
      <Image
        source={require("../assets/images/kfc_kq_logo.png")}
        style={styles.image}
      />
      <Text style={styles.anonymousText}>Bienvenidos a Kiosquitos Quiz</Text>
      <TouchableOpacity
        onPress={() => {
          router.navigate("/login");
        }}
        style={styles.buttonLogout}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  anonymousContainer: {
    alignItems: "center",
  },
  anonymousText: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 24,
    fontFamily: "PoppinsBold",
    width: "80%",
  },
  buttonLogout: {
    backgroundColor: "hsla(349, 100%, 45%, 1)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 24,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 100,
  },
});

export default AnonymousMessage;
